<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;
use Exception;

class ManageContactController extends Controller
{
    //
    public function index(Request $request): Response
    {
        $contact = DB::table('mstr_contact_us')
            ->select(
                'address',
                'contact',
                'email',
                'operational_hour as operational_hours'
            )
            ->first();

        return Inertia::render('Admin/ManageContactUsPage', [
            'contactData' => $contact,
        ]);
    }

    public function update(Request $request)
    {
        try {
            $contact = DB::table('mstr_contact_us')->first();
            $update = DB::table('mstr_contact_us')
                ->where('id', $contact->id)
                ->update([
                    'address' => $request->address,
                    'contact' => $request->contact,
                    'email' => $request->email,
                    'operational_hour' => $request->operational_hours,
                ]);

            return redirect()->route('manage-contact')->with('success', 'Data Berhasil Disimpan!');
        } catch (Exception $e) {
            return $e;
        }
    }
}
