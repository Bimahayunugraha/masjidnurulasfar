<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Exception;

class ManageCategoryController extends Controller
{
    //
    public function index(Request $request): Response
    {
        $categories = DB::table('mstr_article_type')->get();

        return Inertia::render('Admin/ManageCategoryPage', [
            'dataCategory' => $categories,
        ]);
    }

    public function store(Request $request){
        try{
            $insert = DB::table('mstr_article_type')->insert([
                'article_type' => $request->category_name
            ]);

            return redirect()->route('manage-category')->with('success', 'Data Berhasil Disimpan!');
        }catch(Exception $e){
            return $e;
        }
    }

    public function update($id, Request $request){
        try{
            $update = DB::table('mstr_article_type')->where('id', $id)->update([
                'article_type' => $request->category_name
            ]);

            return redirect()->route('manage-category')->with('success', 'Data Berhasil Disimpan!');
        }catch(Exception $e){
            return $e;
        }
    }

    public function delete($id){
        try{
            $delete = DB::table('mstr_article_type')->where('id', $id)->delete();

            return redirect()->route('manage-category')->with('success', 'Data Berhasil Dihapus!');
        }catch(Exception $e){
            return $e;
        }
    }
}
