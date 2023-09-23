<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class DashboardAdminController extends Controller
{
    // Route storage news
    public $pathToShowNews = "storage/uploads/img/articles/";

    // Route storage agenda
    public $pathToShowAgenda = "storage/uploads/img/agendas/";

    public function index(Request $request): Response
    {
        $socialMediasCount = DB::table('mstr_social_media')
            ->count();
        $articlesCount = DB::table('tr_article')
            ->count();
        $agendasCount = DB::table('tr_agenda')
            ->count();

        $dataArticles = [];
        $articles = DB::table('tr_article')->join('mstr_article_type', 'tr_article.article_type_id', '=', 'mstr_article_type.id')
            ->select(
                'tr_article.*',
                'mstr_article_type.article_type',
                'mstr_article_type.id as article_type_id'
            )
            ->orderBy('updated_at', 'desc')
            ->take(5)->get();

        $i = 0;
        foreach ($articles as $article) {
            $dataArticle = new \stdClass();
            $dataArticle->id = $article->id; // : 1,
            $dataArticle->news_title = $article->title; // : "Kegiatan TPA",
            $dataArticle->news_category = $article->article_type; // : "TPA",
            $dataArticle->news_category_id = $article->article_type_id; // : "TPA",
            $dataArticle->news_status = "Published"; // : "Published",
            $dataArticle->news_thumbnail = url($this->pathToShowNews . $article->id . "/" . $article->image_file_name); // : imageKajianMualaf,
            $dataArticle->image_name = $article->image_original_file_name;

            $dataArticle->news_images = []; // : [imageKajianMuslimah, imageTpaAnak],
            $articleImages = DB::table('tr_article_image')->where('article_id', $article->id)->get();
            $j = 0;
            foreach ($articleImages as $articleImage) {
                $newsImage = url($this->pathToShowNews . $article->id . "/" . $articleImage->image_file_name);
                $dataArticle->news_images[$j] = $newsImage;
                $j++;
            }

            $dataArticle->news_author = $article->created_by; // : "Admin",
            $dataArticle->news_excerpt = Str::words(html_entity_decode($article->content, 100)); // :,
            $dataArticle->news_content = $article->content; // :,
            $dataArticle->news_date = $article->updated_at; // : "2021-05-01 00:00:00",

            $dataArticles[$i] = $dataArticle;
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


        return Inertia::render('Admin/DashboardPage', [
            'socialMediaCount' => $socialMediasCount,
            'articlesCount' => $articlesCount,
            'agendasCount' => $agendasCount,
            'articlesData' => $dataArticles,
            'agendasData' => $dataAgendas,
        ]);
    }
}
