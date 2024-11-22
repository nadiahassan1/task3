
export const PostData:React.FC<{Users:Array<any>}>=({Users})=>{
    return<>
    <div className="container">
            <div className="row justify-content-center ">
            {Users.map((elem)=>{
                    return <div key={elem.id} className=" w-50 border m-3 shadow p-5" >
                            <div>
                              <p className="text-center">Name : {elem.title}</p>
                              <p>body : {elem.body}</p>
                            </div> 
                    </div>
                })}
            </div>
         </div>
    </>
}