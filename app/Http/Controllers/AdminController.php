<?php

namespace App\Http\Controllers;

use App\Models\CinemaHall;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response 
    {
      return Inertia::render('Admin/Index', [
        //
    ]);
    }

}