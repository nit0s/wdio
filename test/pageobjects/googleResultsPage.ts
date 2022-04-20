import Page from './page';

class googleResultsPage extends Page {
    //elements
     get imagesTab () {
        return $('.MUFPAc>div:nth-child(2)>a')
    }

    get videoTab(){
        return $('.MUFPAc>div:nth-child(3)>a') 
    }

    get resultsLabel(){
        return $('.LHJvCe>#result-stats')
    }
    //methods
    public async navigateToImagesTab(){
        await this.imagesTab.click();
        await browser.pause(3000);
    }

    public async validateSearchURL(){
        //const currentURl= browser.getUrl();
    }

}

export default new googleResultsPage();