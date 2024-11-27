<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('room', function () {
	return true;
});
