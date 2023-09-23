<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Exception;

class ManageSocialMediaController extends Controller
{
    //
    public function index(Request $request): Response
    {
        $socialMedias = DB::table('mstr_social_media')
            ->select('id', 'name as social_media_name', 'url')
            ->orderBy('updated_at', 'desc')
            ->get();

        return Inertia::render('Admin/ManageSocialMediaPage', [
            'socialMediData' => $socialMedias,
        ]);
    }

    public function store(Request $request)
    {
        try {
            $insert = DB::table('mstr_social_media')->insert([
                'name' => $request->social_media_name,
                'url' => $request->url,
                'created_by' => auth()->user()->name,
                'created_at' => Date('Y-m-d H:i:s'),
            ]);

            return redirect()->route('manage-social-media')->with('success', 'Data Berhasil Disimpan!');
        } catch (Exception $e) {
            return $e;
        }
    }

    public function update($id, Request $request)
    {
        try {
            $update = DB::table('mstr_social_media')->where('id', $id)->update([
                'name' => $request->social_media_name,
                'url' => $request->url,
                'updated_by' => auth()->user()->name,
                'updated_at' => Date('Y-m-d H:i:s')
            ]);

            return redirect()->route('manage-social-media')->with('success', 'Data Berhasil Disimpan!');
        } catch (Exception $e) {
            return $e;
        }
    }

    public function delete($id)
    {
        try {
            $delete = DB::table('mstr_social_media')->where('id', $id)->delete();

            return redirect()->route('manage-social-media')->with('success', 'Data Berhasil Dihapus!');
        } catch (Exception $e) {
            return $e;
        }
    }
}
