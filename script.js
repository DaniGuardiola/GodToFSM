"use strict";

function godify() {
    var n, nodes = [],
        walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false);
    var nextNode = (n = walk.nextNode());
    while (nextNode) {
        nodes.push(n);
        nextNode = (n = walk.nextNode());
    }
    [].forEach.call(nodes, function(node) {
        node.textContent = node.textContent
            .replace(/[Gg]od/g, "Flying Spaghetti Monster")
            .replace(/Atheistic/g, "Logical")
            .replace(/atheistic/g, "logical")
            .replace(/Atheist/g, "Logical human being")
            .replace(/atheist/g, "logical human being")
            .replace(/Atheism/g, "Logic")
            .replace(/atheism/g, "logic")
            .replace(/Believer/g, "blind believer")
            .replace(/believer/g, "blind believer")
            .replace(/Believe /g, "Blindly believe ")
            .replace(/believe /g, "blindly believe ")
            .replace(/Religion/g, "Pastafarianism")
            .replace(/rreligion/g, "pastafarianism")
            .replace(/religion/g, "pastafarianism")
            .replace(/Religious/g, "Dumb")
            .replace(/religious/g, "dumb");
    });
}
godify();
