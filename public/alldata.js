function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);


    return (
        <center><Card
            margin="20px"
            txtcolor="white"
            bgcolor="dark"
            header="All Data in Store:"
            text={data}
        /></center>
    );
}
