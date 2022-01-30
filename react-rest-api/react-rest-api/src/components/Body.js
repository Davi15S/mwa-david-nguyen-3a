import { useEffect, useState } from "react"

function Body() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    var header = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ndXllbnhkMDcyQGdtYWlsLmNvbSIsImlkIjoxMDUyLCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NDI0MzEyNzcsImV4cCI6MTE2NDI0MzEyNzcsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiIyNTQwODEwYS1mMmY4LTQ5OTYtODcyZC02MjJiM2YzNDI3NTYifQ.fk3WPzb-L5ncnbtFYs0voehVJ0htSrf4ex7X1KigViI"
    var url = "https://api.golemio.cz/v2/gtfs/routes?limit=30"

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            const res = await fetch(url,
                {
                    method: "GET",
                    headers: {
                        "x-access-token": header
                    }
                });
            const data = await res.json();
            console.log(data);
            setData(data);
            setIsLoading(false);
        };


        fetchData();
    }, []);

    console.log(data)

    if (isLoading) return <div>Loading</div>

    return (
        <div className="grid grid-cols-3 gap-x-10 gap-y-5 m-5">
            {data.map(i => (
                <div key={i}>
                    <div className={`bg-[#${i.route_color}]`}>
                        <div>{i.route_long_name}</div>
                        <div>{i.route_short_name}</div>
                        <a href={i.route_url} target="_blank">Odkaz!</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Body
