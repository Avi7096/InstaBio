var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#f2a179', '#ff8789'],
                ['#8cf4b6', '#93c3f3'],
                ['#dbf59d', '#f69be5']
            ]
        }
    }
});