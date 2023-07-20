<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function signup(Request $request){

        $validator = Validator::make($request->all(),[
            'username'=>'required',
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if($validator->fails()){
            $response = [
                'sucesss'=>false,
                'message'=>$validator->errors()
            ];

            return response()->json($response, 400);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);

        $success['token'] = $user->createToken('MyApp')->plainTextToken;
        $success['username'] = $user->username;

        $response = [
            'success'=>true,
            'data'=>$success,
            'message'=>'user registered successfull'
        ];

        return response()->json($response, 200);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required'
        ]);

        if($validator->fails()){
            $response = [
                'sucesss'=>false,
                'message'=>$validator->errors()
            ];

            return response()->json($response, 400);
        }

        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password])){
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->plainTextToken;
            $success['username'] = $user->username;

            $response = [
                'success'=>true,
                'data'=>$success,
                'message'=>'user login successfull'
            ];
            return response()->json($response, 200);
        }
        else{
            $response = [
                'success'=>false,
                'message'=>'Unauthorized'
            ];

            return response()->json($response, 400);
        }
    }

    public function logout(Request $request){
        $response = ['success'=>true, 'message'=>'Successfully logged out'];
        return response()->json($response, 200);
    }
}
