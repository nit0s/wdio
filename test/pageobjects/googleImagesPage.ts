import Page from './page';

class googleImagesPage extends Page {
    //elements
      secondImage(number) {
        return $(`.islrc>div:nth-child(${number})`)
     }

     get visitSpan(){
         return $('(//span[contains(text(),"Visitar")])[2]')
     }

}

export default new googleImagesPage();
