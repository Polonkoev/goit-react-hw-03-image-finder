import css from '../ImageGalleryItem/ImageGalleryItem.module.css'
export const ImageGalleryItem =({data, openModal})=>{
    
    
    return(
data.map(({id, webformatURL, largeImageURL}) => {
return (<li className={css.imageGalleryItem} key={id} >
  <img onClick={()=>openModal(largeImageURL)} className={css.imageGalleryItem_image}  src={webformatURL} alt='' />
</li>)
}))
          
}
       
            