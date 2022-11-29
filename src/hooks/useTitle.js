const { useEffect } = require("react")

function useTitle(title) {
    useEffect(() => {
        document.title = `${title} - Doctors Portal`
    }, [title])
}


export default useTitle;
