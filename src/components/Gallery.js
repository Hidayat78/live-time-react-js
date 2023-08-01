import pic from './image/img.jpg';
const Gallery = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', backgroundColor: 'red', color: 'white' }}>Gallery</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <img src={pic} alt='hdt' height='280px' width='300px' />
                <img src={pic} alt='hdt' height='280px' width='300px' />
                <img src={pic} alt='hdt' height='280px' width='300px' />
                <img src={pic} alt='hdt' height='280px' width='300px' />
            </div>
            <div style={{
                marginTop: '10px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <img src={pic} alt='hdt' height='280px' width='300px' />
                <img src={pic} alt='hdt' height='280px' width='300px' />
                <img src={pic} alt='hdt' height='280px' width='300px' />
                <img src={pic} alt='hdt' height='280px' width='300px' />
            </div>
        </div>
    )
}
export default Gallery;