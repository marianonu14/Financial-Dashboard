const Income = ({data}) => {

    const wrapperClass = 'bg-slate-300 rounded-md p-2 md:text-xl'
    
    const titleCard = 'font-bold mb-3'
    console.log('Desde Income',data)

    return ( 
        <main>
            <h1 className="text-3xl p-4">Income</h1>
            <section className="flex flex-col justify-center gap-5 p-4">
                <div className={wrapperClass}>
                    <h2 className={titleCard}>Revenues</h2>
                    <p>{data.Currency} {data.RevenueTTM}</p>
                </div>
                <div className={wrapperClass}>
                    <h2 className={titleCard}>EV/Revenue</h2>
                    <p>{data.EVToRevenue}x</p>
                </div>
                <div className={wrapperClass}>
                    <h2 className={titleCard}>EBITDA</h2>
                    <p>{data.Currency} {data.EBITDA}</p>
                </div>
                <div className={wrapperClass}>
                    <h2 className={titleCard}>EV/EBITDA</h2>
                    <p>{data.EVToEBITDA}x</p>
                </div>
                <div className={wrapperClass}>
                    <h2 className={titleCard}>EPS</h2>
                    <p>{data.Currency} {data.EPS}</p>
                </div>
            </section>
        </main>
     );
}
 
export default Income;