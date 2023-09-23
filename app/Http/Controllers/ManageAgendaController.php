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

class ManageAgendaController extends Controller
{
    public $pathFile = "public/uploads/img/agendas";
    public $pathToShow = "storage/uploads/img/agendas/";
    //

    public function index(Request $request): Response
    {
        $dataAgendas = [];
        $agendas = DB::table('tr_agenda')
            ->orderBy('updated_at', 'desc')
            ->get();

        $i = 0;
        foreach ($agendas as $agenda) {
            $dataAgenda = new \stdClass();
            $dataAgenda->id = $agenda->id;

            $dataAgenda->imageSrc = url($this->pathToShow . $agenda->id . "/" . $agenda->image_file_name);
            $dataAgenda->title = $agenda->title;
            $dataAgenda->slug = $agenda->slug;
            $dataAgenda->schedule = $agenda->schedule;
            $dataAgenda->description = $agenda->description;
            $dataAgenda->imageName = $agenda->image_file_name;

            $dataAgendas[$i] = $dataAgenda;
            $i++;
        }

        return Inertia::render('Admin/ManageAgendaPage', [
            'agendaData' => $dataAgendas
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        try {
            $time = time();
            $fileName = $time . '.' . $request->agenda_image->extension();
            $insert = DB::table('tr_agenda')->insertGetId([
                'title' => $request->agenda_title,
                'slug' => Str::slug($request->agenda_title),
                'description' => $request->agenda_description,
                'schedule' => $request->agenda_schedule,
                'image_file_name' => $fileName,
                'image_original_file_name' => $request->agenda_image->getClientOriginalName(),
                'created_by' => auth()->user()->name,
                'created_at' => Date('Y-m-d H:i:s'),
            ]);

            $pathFile = $this->pathFile . "/" . $insert;
            if (Storage::putFileAs($pathFile . "/", $request->agenda_image, $fileName)) {
                return redirect()->route('manage-agenda')->with('success', 'Data Berhasil Disimpan!');
            } else {
                return redirect()->route('manage-agenda')->with('error', 'Gambar Gagal Disimpan!');
            }
        } catch (Exception $e) {
            return $e;
        }
    }

    public function update($id, Request $request)
    {
        // dd($request->all());

        try {
            $agenda = DB::table('tr_agenda')->where('id', $id)->first();
            $pathFile = $this->pathFile . "/" . $id;
            Storage::delete($pathFile . '/' . $agenda->image_file_name);

            $time = time();
            $fileName = $time . '.' . $request->agenda_image->extension();
            $update = DB::table('tr_agenda')->where('id', $id)->update([
                'title' => $request->agenda_title,
                'slug' => Str::slug($request->agenda_title),
                'description' => $request->agenda_description,
                'schedule' => $request->agenda_schedule,
                'image_file_name' => $fileName,
                'image_original_file_name' => $request->agenda_image->getClientOriginalName(),
                'created_by' => auth()->user()->name,
                'created_at' => Date('Y-m-d H:i:s'),
            ]);

            if (Storage::putFileAs($pathFile . "/", $request->agenda_image, $fileName)) {
                return redirect()->route('manage-agenda')->with('success', 'Data Berhasil Disimpan!');
            } else {
                return redirect()->route('manage-agenda')->with('error', 'Gambar Gagal Disimpan!');
            }
        } catch (Exception $e) {
            return $e;
        }
    }

    public function delete($id)
    {
        // dd($request->all());

        try {
            $pathFile = $this->pathFile . "/" . $id;

            $agenda = DB::table('tr_agenda')->where('id', $id)->first();

            Storage::delete($pathFile . '/' . $agenda->image_file_name);
            $delete = DB::table('tr_agenda')->where('id', $id)->delete();
        } catch (Exception $e) {
            return $e;
        }
    }
}
