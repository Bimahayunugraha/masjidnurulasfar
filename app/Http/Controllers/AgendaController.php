<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class AgendaController extends Controller
{
    // route to storage
    public $pathFile = "public/uploads/img/agendas";
    public $pathToShow = "storage/uploads/img/agendas/";

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $dataAgendas = [];
        $agendas = DB::table('tr_agenda')
            ->inRandomOrder()
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
            $dataAgenda->imageName = $agenda->image_original_file_name;

            $dataAgendas[$i] = $dataAgenda;
            $i++;
        }

        return Inertia::render('Guest/AgendaPage', [
            'agendaData' => $dataAgendas
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {

        $agendaDetail = DB::table('tr_agenda')
            ->where('slug', $slug)
            ->first();

        $dataAgenda = new \stdClass();
        $dataAgenda->id = $agendaDetail->id;

        $dataAgenda->imageSrc = url($this->pathToShow . $agendaDetail->id . "/" . $agendaDetail->image_file_name);
        $dataAgenda->title = $agendaDetail->title;
        $dataAgenda->slug = $agendaDetail->slug;
        $dataAgenda->schedule = $agendaDetail->schedule;
        $dataAgenda->description = $agendaDetail->description;
        $dataAgenda->imageName = $agendaDetail->image_original_file_name;

        return Inertia::render('Guest/DetailAgendaPage', [
            'agendaDetail' => $dataAgenda
        ]);
    }
}
