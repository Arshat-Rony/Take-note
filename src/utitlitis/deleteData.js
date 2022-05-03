

const deleteData = (url, id, items, setItems) => {
    console.log("url", url)
    fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount > 0) {
                const remaining = items.filter(item => item._id !== id)
                setItems(remaining)
            }
            console.log(data)
        })
}

export default deleteData;
