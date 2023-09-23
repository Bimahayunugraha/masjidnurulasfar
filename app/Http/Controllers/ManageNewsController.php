<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Exception;

class ManageNewsController extends Controller
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

        $categories = DB::table('mstr_article_type')->orderBy('article_type', 'asc')->select('id', 'article_type as name')->get();

        return Inertia::render('Admin/ManageNewsPage', [
            'newsData' => $dataArticles,
            'categories' => $categories
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        try {
            $time = time();
            $fileName = $time . '-1.' . $request->news_images[0]->extension();
            $insert = DB::table('tr_article')->insertGetId([
                'title' => $request->news_title,
                'slug' => Str::slug($request->news_title),
                'article_type_id' => $request->news_category,
                'content' => $request->news_content,
                'image_file_name' => $fileName,
                'image_original_file_name' => $request->news_images[0]->getClientOriginalName(),
                'created_by' => auth()->user()->name,
                'created_at' => Date('Y-m-d H:i:s'),
            ]);

            $j = 1;
            foreach ($request->news_images as $newsImage) {
                $pathFile = $this->pathFile . "/" . $insert;
                $fileNameDetail = $time . '-' . $j . '.' . $newsImage->extension();

                if (Storage::putFileAs($pathFile . "/", $newsImage, $fileNameDetail)) {
                    $insertDetail = DB::table('tr_article_image')->insert([
                        'article_id' => $insert,
                        'image_file_name' => $fileNameDetail,
                        'image_original_file_name' => $newsImage->getClientOriginalName()
                    ]);
                }
                $j++;
            }

            return redirect()->route('manage-news')->with('success', 'Data Berhasil Disimpan!');
        } catch (Exception $e) {
            return $e;
        }
    }

    public function update($id, Request $request)
    {
        // dd($request->all());
        try {
            $article = DB::table('tr_article')->where('id', $id)->first();
            $fileName = $article->image_file_name;
            $fileOriginName = $article->image_original_file_name;

            if ($request->news_images != null) {
                $time = time();
                $fileName = $time . '-1.' . $request->news_images[0]->extension();
                $fileOriginName = $request->news_images[0]->getClientOriginalName();

                $pathFile = $this->pathFile . "/" . $id;

                // TODO Deleting old images
                $articleImages = DB::table('tr_article_image')->where('article_id', $id)->get();
                foreach ($articleImages as $articleImage) {
                    Storage::delete($pathFile . '/' . $articleImage->image_file_name);
                }
                $deleteImages = DB::table('tr_article_image')->where('article_id', $id)->delete();

                // TODO Insert new images
                $j = 1;
                foreach ($request->news_images as $newsImage) {
                    $fileNameDetail = $time . '-' . $j . '.' . $newsImage->extension();

                    if (Storage::putFileAs($pathFile . "/", $newsImage, $fileNameDetail)) {
                        $insertDetail = DB::table('tr_article_image')->insert([
                            'article_id' => $id,
                            'image_file_name' => $fileNameDetail,
                            'image_original_file_name' => $newsImage->getClientOriginalName()
                        ]);
                    }
                    $j++;
                }
            }

            $update = DB::table('tr_article')->where('id', $id)->update([
                'title' => $request->news_title,
                'slug' => Str::slug($request->news_title),
                'article_type_id' => $request->news_category,
                'content' => $request->news_content,
                'image_file_name' => $fileName,
                'image_original_file_name' => $fileOriginName,
                'created_by' => auth()->user()->name,
                'created_at' => Date('Y-m-d H:i:s'),
            ]);

            return redirect()->route('manage-news')->with('success', 'Data Berhasil Disimpan!');
        } catch (Exception $e) {
            return $e;
        }
    }

    public function delete($id)
    {
        try {
            $pathFile = $this->pathFile . "/" . $id;
            $articleImages = DB::table('tr_article_image')->where('article_id', $id)->get();
            foreach ($articleImages as $articleImage) {
                Storage::delete($pathFile . '/' . $articleImage->image_file_name);
            }
            $deleteImages = DB::table('tr_article_image')->where('article_id', $id)->delete();

            $delete = DB::table('tr_article')->where('id', $id)->delete();

            return redirect()->route('manage-news')->with('success', 'Data Berhasil Dihapus!');
        } catch (Exception $e) {
            return $e;
        }
    }
}
