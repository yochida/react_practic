import React from 'react';
import Show from './Show';

class Comments extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.getName.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            name,
            message
        }
        console.log(data);
    }

    render() {
        return (
            <div>
                <form className="text-center" onSubmit={this.handleSubmit}>
                    <br></br>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <h4>React CRUD</h4>
                            <input type="text" className="form-control" placeholder="name" ref={(input) => this.getName = input} />
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="รายละเอียด..." ref={(input) => this.getMessage = input}></textarea>
                            <br></br>
                            <button type="submit" className="btn btn-outline-secondary w-100">Add Comment</button>

                            <br></br>
                            <br></br>
                            <Show />
                        </div>
                        <div className="col-4"></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Comments;