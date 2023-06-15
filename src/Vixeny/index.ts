import fun from "vixeny"


export default {
    fetch: fun (
        {hasName: "http://localhost:3000/"}
    )(
        [
            {
                path: "/", f : () => "Hi"
            },
            {
                path: "/json",  
                method:"POST",
                headers: ".json", 
                f : async f => JSON.stringify(await f.req.json())
            },
            {
                path: "/id/:id", f: f => f.param.id
            }
        ]
    )
}