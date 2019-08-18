import React from "react"

class Awss3 extends React.Component {

    render() {
        return (
            <div>
                <form action="http://localhost:8081/abc" name="myform" method="POST" enctype="multipart/form-data">
                    Uploadfile : <input type="file" name="document" /> <br/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default Awss3;