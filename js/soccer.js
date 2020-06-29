class Soccer {

    async getSoccer() {
        const response = await fetch(`https://www.scorebat.com/video-api/v1/`);
        const soccer = await response.json();

        return {
            soccer
        }
    }
}
