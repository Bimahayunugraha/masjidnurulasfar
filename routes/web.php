<?php

use App\Http\Controllers\AgendaController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\DashboardAdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ManageCategoryController;
use App\Http\Controllers\ManageSocialMediaController;
use App\Http\Controllers\ManageNewsController;
use App\Http\Controllers\ManageContactController;
use App\Http\Controllers\ManageAgendaController;
use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Menu Home
Route::get('/', [HomeController::class, 'index'])->name('home');

// Menu Profile
Route::get("/profile-masjid", function () {
    return Inertia::render("Guest/ProfilePage");
})->name('profile-masjid');

// Menu Agenda
Route::controller(AgendaController::class)->group(function () {
    Route::get("/agenda", 'index')->name('agenda-masjid');
    Route::get('/agenda/{slug}', 'show')->name('detail-agenda-masjid');
});


// Menu Event
Route::get('/event', function () {
    return Inertia::render("Guest/EventPage");
})->name('event-masjid');

Route::get('/event/{slug}', function () {
    return Inertia::render("Guest/DetailEventPage");
})->name('detail-event-masjid');

// Menu Berita
Route::controller(NewsController::class)->group(function () {
    Route::get("/berita", 'index')->name('berita-masjid');
    Route::get('/berita/{slug}', 'show')->name('detail-berita-masjid');
});


// Menu Kontak

Route::controller(ContactsController::class)->group(function () {
    Route::get("/kontak", 'index')->name('contact');
    Route::post("/kontak", 'sendMail')->name('send-contact');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::middleware('auth')->group(function () {


    Route::get('/dashboard', [DashboardAdminController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

    Route::get('/mengelola/profile-masjid', function () {
        return Inertia::render('Admin/ManageProfileMasjidPage');
    })->name('manage-profile-masjid');

    // Route::get('/mengelola/kontak', function () {
    //     return Inertia::render('Admin/ManageContactUsPage');
    // })->name('manage-kontak');
    Route::controller(ManageContactController::class)->group(function () {
        Route::get('/mengelola/kontak', 'index')->name('manage-contact');
        Route::post('/mengelola/kontak', 'update')->name('manage-contact.update');
    });

    Route::controller(ManageSocialMediaController::class)->group(function () {
        Route::get('/mengelola/sosial-media', 'index')->name('manage-social-media');
        Route::post('/mengelola/sosial-media', 'store')->name('manage-social-media.store');
        Route::patch('/mengelola/sosial-media/{id}', 'update')->name('manage-social-media.update');
        Route::delete('/mengelola/sosial-media/{id}', 'delete')->name('manage-social-media.delete');
    });

    // Route::get('/mengelola/agenda', function () {
    //     return Inertia::render('Admin/ManageAgendaPage');
    // })->name('manage-agenda');
    Route::controller(ManageAgendaController::class)->group(function () {
        Route::get('/mengelola/agenda', 'index')->name('manage-agenda');
        Route::post('/mengelola/agenda', 'store')->name('manage-agenda.store');
        Route::patch('/mengelola/agenda/{id}', 'update')->name('manage-agenda.update');
        Route::delete('/mengelola/agenda/{id}', 'delete')->name('manage-agenda.delete');
    });

    Route::get('/manage/events', function () {
        return Inertia::render('Admin/ManageEventPage');
    })->name('manage-events');

    Route::controller(ManageNewsController::class)->group(function () {
        Route::get('/mengelola/berita', 'index')->name('manage-news');
        Route::post('/mengelola/berita', 'store')->name('manage-news.store');
        Route::patch('/mengelola/berita/{id}', 'update')->name('manage-news.update');
        Route::delete('/mengelola/berita/{id}', 'delete')->name('manage-news.delete');
    });

    Route::controller(ManageCategoryController::class)->group(function () {
        Route::get('/mengelola/kategori', 'index')->name('manage-category');
        Route::post('/mengelola/kategori', 'store')->name('manage-category.store');
        Route::patch('/mengelola/kategori/{id}', 'update')->name('manage-category.update');
        Route::delete('/mengelola/kategori/{id}', 'delete')->name('manage-category.delete');
    });
});

Route::get("*", function () {
    return Inertia::render("NotFoundPage");
})->name('not-found');




// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
