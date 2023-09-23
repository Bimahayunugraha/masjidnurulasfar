<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Contacts extends Model
{
    use HasFactory;
    use HasUuids;

    protected $table = 'contacts';
    protected $guarded = ['id'];
}
