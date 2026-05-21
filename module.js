Hooks.once('init', () => {
    // Registro do Babele
    if (typeof Babele !== 'undefined') {
        const babele = Babele.get();

        babele.register({
            module: 'daggerheart-translation-pt-BR',
            lang: 'pt-BR',
            dir: 'compendium',
        });
    }
});

Hooks.on('ready', async () => {
    try {
        const homebrew = foundry.utils.deepClone(
            game.settings.get('daggerheart', 'Homebrew')
        );

        // Apenas labels visíveis
        homebrew.currency.coins.label = 'Moedas';
        homebrew.currency.handfuls.label = 'Punhados';
        homebrew.currency.bags.label = 'Bolsas';
        homebrew.currency.chests.label = 'Baús';

        await game.settings.set(
            'daggerheart',
            'Homebrew',
            homebrew
        );

        console.log(
            'daggerheart-translation-pt-BR | Labels das moedas aplicadas!'
        );

    } catch (err) {
        console.error(
            'daggerheart-translation-pt-BR | Erro:',
            err
        );
    }
});