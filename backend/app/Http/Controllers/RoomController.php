<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Transaction;

use DB;

class RoomController extends Controller
{
    //
    function Booking(Request $req){
        DB::beginTransaction();
        try{

            /*
            $this->validate($req, [
                'image' => 'required|image|mimes:jpeg,png,jpg|max:2048',
                'product_id' => 'required'
            ]);
            */

            $roomID = $req->input('room_id');

            $booking = new Transaction;
            $booking->room_id = $roomID;
            $booking->customer_id = $req->input('customer_id');
            $booking->check_in_date = $req->input('check_in_date');
            $booking->check_out_date = $req->input('check_out_date');
            $booking->payment = $req->input('payment');
            $booking->status = "booked";
            $booking->save();

            DB::table('kamar')
            ->where('id', $roomID)
            ->update(['available' => false]);

            DB::commit();
            return response()->json(['message'=>'Success'], 200);
        }
        catch(\Exception $e){
            DB::rollback();
            return response()->json(['message'=>'Error:' + $e], 500);
        }

    }
}
