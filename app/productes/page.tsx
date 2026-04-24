type Tpost = {
    id:number,
    title:string,
    userId:number,
    body:string
}

async function productes() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
            next: { revalidate: 3600 }
        });
        const posts:Tpost[] = await data.json();
        return (
            <div className="flex flex-wrap gap-4 m-3 ">
                {posts?.map(x =>
                    <div key={x.id} className="bg-gray-600 rounded-xl min-w-64 flex-1 h-56">
                        <h1 className="text-red-600 font-bold text-2xl">{x.title}</h1>
                        <p className="text-green-600">{x.body}</p>
                    </div>
                )}
            </div>
        )
    } catch(error) {
        return <div>Failed to load</div>
    }
}

export default productes 


