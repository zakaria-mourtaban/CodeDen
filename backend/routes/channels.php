<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('room.{$room_id}', function () {
	return true;
});
