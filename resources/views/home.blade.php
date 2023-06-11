@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12" id="app">
            <div class="card">
                <div class="card-header">{{ __('Dashboar') }}</div>

                <div class="card-body">
                    

                    <router-view />
                    
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
