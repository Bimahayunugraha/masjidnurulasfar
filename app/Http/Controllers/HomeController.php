<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    // Route storage news
    public $pathToShowNews = "storage/uploads/img/articles/";

    // Route storage agenda
    public $pathToShowAgenda = "storage/uploads/img/agendas/";

    public function index(Request $request): Response
    {

        $dataNewses = [];
        $newses = DB::table('tr_article')->join('mstr_article_type', 'tr_article.article_type_id', '=', 'mstr_article_type.id')
            ->select(
                'tr_article.*',
                'mstr_article_type.article_type',
                'mstr_article_type.id as article_type_id'
            )
            ->orderBy('updated_at', 'desc')
            ->take(5)->get();

        $i = 0;
        foreach ($newses as $news) {
            $dataNews = new \stdClass();
            $dataNews->id = $news->id; // : 1,
            $dataNews->news_title = $news->title; // : "Kegiatan TPA",
            $dataNews->slug = $news->slug;
            $dataNews->news_category = $news->article_type; // : "TPA",
            $dataNews->news_category_id = $news->article_type_id; // : "TPA",
            $dataNews->news_status = "Published"; // : "Published",
            $dataNews->news_thumbnail = url($this->pathToShowNews . $news->id . "/" . $news->image_file_name); // : imageKajianMualaf,
            $dataNews->image_name = $news->image_original_file_name;

            $dataNews->news_images = []; // : [imageKajianMuslimah, imageTpaAnak],
            $articleImages = DB::table('tr_article_image')->where('article_id', $news->id)->get();
            $j = 0;
            foreach ($articleImages as $articleImage) {
                $newsImage = url($this->pathToShowNews . $news->id . "/" . $articleImage->image_file_name);
                $dataNews->news_images[$j] = $newsImage;
                $j++;
            }

            $dataNews->news_author = $news->created_by; // : "Admin",
            $dataNews->news_excerpt = Str::words(html_entity_decode($news->content, 100)); // :,
            $dataNews->news_content = $news->content; // :,
            $dataNews->news_date = $news->updated_at; // : "2021-05-01 00:00:00",

            $dataNewses[$i] = $dataNews;
            $i++;
        }

        $dataAgendas = [];
        $agendas = DB::table('tr_agenda')
            ->orderBy('updated_at', 'desc')
            ->take(5)->get();

        $i = 0;
        foreach ($agendas as $agenda) {
            $dataAgenda = new \stdClass();
            $dataAgenda->id = $agenda->id;

            $dataAgenda->imageSrc = url($this->pathToShowAgenda . $agenda->id . "/" . $agenda->image_file_name);
            $dataAgenda->title = $agenda->title;
            $dataAgenda->slug = $agenda->slug;
            $dataAgenda->schedule = $agenda->schedule;
            $dataAgenda->description = $agenda->description;
            $dataAgenda->imageName = $agenda->image_original_file_name;

            $dataAgendas[$i] = $dataAgenda;
            $i++;
        }

        $contact = DB::table('mstr_contact_us')
            ->select(
                'address',
                'contact',
                'email',
                'operational_hour as operational_hours'
            )
            ->first();

        $socialMedias = DB::table('mstr_social_media')
            ->select('id', 'name as social_media_name', 'url')
            ->orderBy('updated_at', 'desc')
            ->get();


        return Inertia::render('Guest/HomePage', [
            'newsData' => $dataNewses,
            'agendasData' => $dataAgendas,
            'contactData' => $contact,
            'socialMediasData' => $socialMedias
        ]);
    }
}
