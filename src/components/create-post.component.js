const CreatePost = props => {
    return (
        <div className='row mt-4'>
            <div className='col-6'>
                <input className='form-control' type="text" placeholder='Create new post'/>
            </div>
            <div className='col-6'>
                <button className='btn bg-primary text-white' onClick={props.handleCreatePost}><i className='fa fa-plus'
                /> New Post
                </button>
            </div>
        </div>
    )
}
export default CreatePost