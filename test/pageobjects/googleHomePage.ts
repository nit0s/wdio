import Page from './page';

class googleHomePage extends Page {
    //elements
     get googleLogo () {
        return $('img.lnXdpd');
    }

    get feelingLuckyButton(){
        return $('.FPdoLc.lJ9FBc>center>input:nth-child(2)')
    }

    get searchBar(){
        return $('input[name="q"]')
    }

    get searchWithGoogleButton(){
        return $('.FPdoLc.lJ9FBc>center>input:nth-child(1)')
    }
    //methods
    public async navigateToHomepage(){
        return super.open('login');
    }
    
    public async searchSomething( txt ){
        await this.searchBar.addValue(txt);
        await browser.keys('Enter')
        await browser.pause(3000);
    }
}

export default new googleHomePage();