const CreatePost = () => {
    return (
        <div className='row mt-4'>
            <div className='col-6'>
                <input className='form-control' type="text" placeholder='Create new post'/>
            </div>
            <div className='col-6'>
                <button className='btn bg-secondary text-white'> <i className='fa fa-plus'/> New Post</button>
            </div>
        </div>
    )
}
export default CreatePost