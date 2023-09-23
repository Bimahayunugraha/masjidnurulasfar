<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class NewsController extends Controller
{
    public $pathFile = "public/uploads/img/articles";
    public $pathToShow = "storage/uploads/img/articles/";
    public function index(Request $request): Response
    {
        $dataArticles = [];
        $articles = DB::table('tr_article')->join('mstr_article_type', 'tr_article.article_type_id', '=', 'mstr_article_type.id')
            ->select(
                'tr_article.*',
                'mstr_article_type.article_type',
                'mstr_article_type.id as article_type_id'
            )
            ->orderBy('updated_at', 'desc')
            ->get();

        $i = 0;
        foreach ($articles as $article) {
            $dataArticle = new \stdClass();
            $dataArticle->id = $article->id; // : 1,
            $dataArticle->news_title = $article->title; // : "Kegiatan TPA",
            $dataArticle->slug = $article->slug;
            $dataArticle->news_category = $article->article_type; // : "TPA",
            $dataArticle->news_category_id = $article->article_type_id; // : "TPA",
            $dataArticle->news_status = "Published"; // : "Published",
            $dataArticle->news_thumbnail = url($this->pathToShow . $article->id . "/" . $article->image_file_name); // : imageKajianMualaf,
            $dataArticle->image_name = $article->image_original_file_name;

            $dataArticle->news_images = []; // : [imageKajianMuslimah, imageTpaAnak],
            $articleImages = DB::table('tr_article_image')->where('article_id', $article->id)->get();
            $j = 0;
            foreach ($articleImages as $articleImage) {
                $newsImage = url($this->pathToShow . $article->id . "/" . $articleImage->image_file_name);
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

        return Inertia::render('Guest/NewsPage', [
            'newsData' => $dataArticles,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $newsDetail = DB::table('tr_article')->join('mstr_article_type', 'tr_article.article_type_id', '=', 'mstr_article_type.id')
            ->select(
                'tr_article.*',
                'mstr_article_type.article_type',
                'mstr_article_type.id as article_type_id'
            )
            ->where('slug', $slug)
            ->first();

        $dataNews = new \stdClass();
        $dataNews->id = $newsDetail->id;
        $dataNews->news_title = $newsDetail->title;
        $dataNews->slug = $newsDetail->slug;
        $dataNews->news_category = $newsDetail->article_type;
        $dataNews->news_category_id = $newsDetail->article_type_id;
        $dataNews->news_status = "Published";
        $dataNews->news_thumbnail = url($this->pathToShow . $newsDetail->id . "/" . $newsDetail->image_file_name);
        $dataNews->image_name = $newsDetail->image_original_file_name;

        $dataNews->news_images = []; // : [imageKajianMuslimah, imageTpaAnak],
        $articleImages = DB::table('tr_article_image')->where('article_id', $newsDetail->id)->get();
        $j = 0;
        foreach ($articleImages as $articleImage) {
            $newsImage = url($this->pathToShow . $newsDetail->id . "/" . $articleImage->image_file_name);
            $newsImageName = $articleImage->image_original_file_name;
            $dataNews->news_images[$j] = $newsImage;
            $dataNews->news_images_name[$j] = $newsImageName;
            $j++;
        }

        $dataNews->news_author = $newsDetail->created_by;
        $dataNews->news_excerpt = Str::words(html_entity_decode($newsDetail->content, 100)); // :,
        $dataNews->news_content = $newsDetail->content; // :,
        $dataNews->news_date = $newsDetail->updated_at;

        $dataArticles = [];
        $articles = DB::table('tr_article')->join('mstr_article_type', 'tr_article.article_type_id', '=', 'mstr_article_type.id')
            ->select(
                'tr_article.*',
                'mstr_article_type.article_type',
                'mstr_article_type.id as article_type_id'
            )
            ->inRandomOrder()
            ->get();

        $i = 0;
        foreach ($articles as $article) {
            $dataArticle = new \stdClass();
            $dataArticle->id = $article->id; // : 1,
            $dataArticle->news_title = $article->title; // : "Kegiatan TPA",
            $dataArticle->slug = $article->slug;
            $dataArticle->news_category = $article->article_type; // : "TPA",
            $dataArticle->news_thumbnail = url($this->pathToShow . $article->id . "/" . $article->image_file_name); // : imageKajianMualaf,
            $dataArticle->image_name = $article->image_original_file_name;
            $dataArticle->news_author = $article->created_by; // : "Admin",            
            $dataArticle->news_date = $article->updated_at; // : "2021-05-01 00:00:00",

            $dataArticles[$i] = $dataArticle;
            $i++;
        }

        return Inertia::render('Guest/DetailNewsPage', [
            'newsDetail' => $dataNews,
            'otherNews' => $dataArticles,
        ]);
    }
}
