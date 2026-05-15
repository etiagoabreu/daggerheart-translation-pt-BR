Hooks.once('init', () => {
    if (typeof Babele !== 'undefined') {
        const babele = Babele.get();
        babele.register({
            module: 'daggerheart-translation-pt-BR',
            lang: 'pt-BR',
            dir: 'compendium',
        });
    }
});