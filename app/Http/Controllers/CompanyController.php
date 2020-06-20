<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Company;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $company = Company::all();
        return response()->json(['company'=>$company]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        
        $validateData = Validator::make($request->all(),[
            'person_name' => 'required',
            'company_name' => 'required',
            'jobtitle' => 'required',
            'bio' => 'required',
        ]);
        if($validateData->fails()){
            return response()->json([
                'message'=>'Invalid input'
            ]);
        }else{
            $company = new Company;
            $company->person_name = $request->person_name;
            $company->company_name = $request->company_name;
            $company->jobtitle = $request->jobtitle;
            $company->bio = $request->bio;
            $company->save();
            return response()->json([
                'message'=>'Company Created Successfully','product'=>$company
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $company = Company::find($id);
        if($company){
            return response()->json(['company'=>$company]);
        }else{
            return response()->json(['msg'=>'Something went wrong','company'=>$company]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $company = Company::find($id);
        return response()->json(['company'=>$company]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $validateData = Validator::make($request->all(),[
            'person_name' => 'required',
            'company_name' => 'required',
            'jobtitle' => 'required',
            'bio' => 'required',
        ]);
        if($validateData->fails()){
            return response()->json([
                'message'=>'Invalid input'
            ]);
        }else{
            $company = Company::find($id);
            $company->person_name = $request->person_name;
            $company->company_name = $request->company_name;
            $company->jobtitle = $request->jobtitle;
            $company->bio = $request->bio;
            $company->save();
            return response()->json([
                'message'=>'Company Updated Successfully','product'=>$company
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $company = Company::find($id);
        if($company){
            $company->delete();
            return response()->json(['msg'=>'Item Deleted Successfully','company',$company]);
        }else{
            return response()->json(['msg'=>'Item doesn\'t exit','company',$company]);
        }
        

    }
}
