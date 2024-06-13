"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const archons = [
        {
            id: `Venti`,
            nom: `Venti: Archon Anemo`,
            sortie: true,
            img: `../Image/Personnage/Venti.png`,
            vision: `anemo`,
            element: `../Image/Element/Element_Anemo.png`,
            arme: `../Image/Arme/arc.png`,
            region: `../Image/Région/Mondstadt.png`,
            description: `Venti, également connu sous le nom de Barbatos, est un personnage jouable dans Genshin Impact qui se révèle être l'Archon d'Anémo (vent) de la nation de Mondstadt. Sous son identité humaine, il prend l'apparence d'un ménestrel nommé "Venti". Son histoire révèle sa lutte pour protéger Mondstadt, son implication dans les événements de l'Archon Quest "Le mensonge du loup du Nord", ainsi que son désir de préserver la liberté et la paix pour les habitants de Mondstadt. Le passé complexe de Venti est exploré dans l'histoire du jeu, révélant ses motivations et son rôle essentiel dans le monde de Teyvat.`,
        },
        {
            id: `Zhongli`,
            nom: `Zhongli: Archon Geo`,
            sortie: true,
            img: `../Image/Personnage/Zhongli.png`,
            vision: `geo`,
            element: `../Image/Element/Element_Geo.png`,
            arme: `../Image/Arme/lance.png`,
            region: `../Image/Région/Liyue.png`,
            description: `"Zhongli est un personnage jouable dans Genshin Impact et est l'Archon Geo de la nation de Liyue. Son histoire tourne autour de sa décision de démissionner de sa position d'Archon et de transférer son pouvoir à son peuple. Il a fait cette décision pour le bien de Liyue, car il croyait que le pouvoir de l'Archon devait être partagé équitablement entre les mortels. Les joueurs interagissent avec Zhongli lors de la quête d'histoire "Les secrets de l'Ancien Geo," qui révèle son passé en tant qu'Archon et son implication dans les événements de Liyue. L'histoire de Zhongli explore des thèmes de sacrifice, de responsabilité et de la relation entre les dieux et les mortels. Il est également associé à la géologie et à la richesse de Liyue, ce qui est reflété dans son rôle en tant que consultant en pierre à l'agence Wangsheng. L'histoire de Zhongli est un élément clé de l'intrigue de Liyue dans Genshin Impact et met en lumière son caractère réfléchi et stoïque, ainsi que son désir de voir sa nation prospérer et ses habitants prospérer."`,
        },
        {
            id: `Raiden`,
            nom: `Raiden: Archon Electro`,
            sortie: true,
            img: `../Image/Personnage/Raiden.png`,
            vision: `electro`,
            element: `../Image/Element/Element_Electro.png`,
            arme: `../Image/Arme/lance.png`,
            region: `../Image/Région/Inazuma.png`,
            description: `Raiden Shogun, également connue sous le nom d'Ei, est un personnage jouable dans Genshin Impact, et elle est l'Archon Électro de la nation d'Inazuma. Son histoire tourne autour de sa quête pour maintenir la vision d'Eternité, une vision électro très puissante, qui est le symbole de l'autorité divine d'Inazuma. Cependant, Raiden Shogun est en conflit avec ses propres croyances et son désir de préserver sa nation à tout prix. Les joueurs interagissent avec elle lors de la quête "L'Invincible Shogun" et en apprennent davantage sur son passé, ses dilemmes et ses responsabilités en tant qu'Archon. L'histoire de Raiden Shogun explore des thèmes de sacrifice, de devoir et de leadership, et elle est l'un des personnages centraux de l'arc d'Inazuma dans Genshin Impact.`,
        },
        {
            id: `Nahida`,
            nom: `Nahida: Archon Dendro`,
            sortie: true,
            img: `../Image/Personnage/Nahida.png`,
            vision: `dendro`,
            element: `../Image/Element/Element_Dendro.png`,
            arme: `../Image/Arme/Catalyseur.png`,
            region: `../Image/Région/Sumeru.png`,
            description: `Nahida est un personnage mystérieux dans Genshin Impact, que le protagoniste rencontre dans le samsara du Festival Sabzeruz. Elle se révèle être la Rani Kusanali, l'Archon Dendro de Sumeru, bien qu'elle n'ait pas de véritable pouvoir en raison de l'influence de l'Académie. Elle est capable de percevoir Nahida, ainsi que de prendre possession de ceux équipés d'un terminal akashien, mais elle utilise rarement ce pouvoir. Nahida est née le jour où la précédente Archon Dendro est décédée, ce qui lui vaut le mépris de l'Académie. Elle apporte son aide au protagoniste en donnant des indices pour résoudre le samsara du Festival Sabzeruz, ainsi qu'en maintenant Dunyarzad en vie. Elle est en contact avec le protagoniste à travers Catherine et est finalement libérée de sa prison par une stratégie élaborée avec l'aide de Cyno, Dehya et Alhaitham. En tant qu'Archon Dendro, elle est liée à l'Irminsul et a pour rôle de le protéger.`,
        },
        {
            id: `Furina`,
            nom: `Furina: Archon Hydro`,
            sortie: true,
            img: `../Image/Personnage/Furina.png`,
            vision: `hydro`,
            element: `../Image/Element/Element_Hydro.png`,
            arme: `../Image/Arme/epee.png`,
            region: `../Image/Région/Fontaine.png`,
            description: `Furina, l'Archon Hydro de Fontaine, est très appréciée par ses habitants pour son charisme, son esprit vif et son élégance, mais surtout pour son sens inégalé de la dramaturgie. Elle est aussi insaisissable que les personnages rusés du théâtre, ce qui renforce son charme divin. Cependant, derrière son aura imposante, on peut se demander si, lorsqu'elle est seule, elle ressent également la solitude. Le récit évoque la possibilité, mais la réalité demeure un mystère pour les gens, car les larmes de Furina sont discrètement absorbées par la Fontaine de Lucine, préservant ainsi l'image de la divinité inaccessible. `,
        },
        {
            id: `Murata`,
            nom: `Murata: Archon Pyro`,
            sortie: false,
            vision: `pyro`,
        },
        {
            id: `Tsarista`,
            nom: `Tsaritsa: Archon Cryo`,
            sortie: false,
            vision: `cryo`,
        },
    ];
    archons.forEach((archon) => {
        const place = document.querySelector("#" + archon.id);
        if (!place) {
            console.error(`Element with id ${archon.id} not found`);
            return;
        }
        if (!archon.sortie) {
            const nom = document.createElement("h1");
            nom.classList.add("text-" + archon.vision, "text-2xl", "mb-4");
            nom.textContent = archon.nom;
            place.appendChild(nom);
            const nonSortie = document.createElement("p");
            nonSortie.classList.add("text-" + archon.vision, "text-2xl", "mb-4");
            nonSortie.textContent = `Personnage pas encore sorti`;
            place.appendChild(nonSortie);
            return;
        }
        const table = document.createElement("table");
        table.classList.add("flex", "flex-row", "justify-center", "items-center", "border-2", "border-" + archon.vision, "rounded-3xl", "max-w-screen-2xl");
        const tbody = document.createElement("tbody");
        const row0 = document.createElement("tr");
        const head = document.createElement("th");
        head.colSpan = 2;
        head.classList.add("text-" + archon.vision, "text-2xl", "mb-4");
        head.textContent = archon.nom;
        row0.appendChild(head);
        tbody.appendChild(row0);
        const row1 = document.createElement("tr");
        const imgCell = document.createElement("td");
        imgCell.rowSpan = 4;
        imgCell.classList.add("p-4", "w-1/4", "h-auto");
        const img = document.createElement("img");
        img.src = archon.img;
        imgCell.appendChild(img);
        row1.appendChild(imgCell);
        const elementCell = document.createElement("td");
        elementCell.classList.add("p-4", "flex", "justify-center", "items-center");
        const elementImg = document.createElement("img");
        elementImg.src = archon.element;
        elementImg.classList.add("w-32", "h-32");
        elementCell.appendChild(elementImg);
        row1.appendChild(elementCell);
        tbody.appendChild(row1);
        const row2 = document.createElement("tr");
        const armeCell = document.createElement("td");
        armeCell.classList.add("p-4", "flex", "justify-center", "items-center");
        const armeImg = document.createElement("img");
        armeImg.src = archon.arme;
        armeImg.classList.add("w-32", "h-32");
        armeCell.appendChild(armeImg);
        row2.appendChild(armeCell);
        tbody.appendChild(row2);
        const row3 = document.createElement("tr");
        const regionCell = document.createElement("td");
        regionCell.classList.add("p-4", "flex", "justify-center", "items-center");
        const regionImg = document.createElement("img");
        regionImg.src = archon.region;
        regionImg.classList.add("w-32", "h-32");
        regionCell.appendChild(regionImg);
        row3.appendChild(regionCell);
        tbody.appendChild(row3);
        const row4 = document.createElement("tr");
        const descriptionCell = document.createElement("td");
        descriptionCell.classList.add("p-4", "text-" + archon.vision, "text-center");
        descriptionCell.textContent = archon.description;
        row4.appendChild(descriptionCell);
        tbody.appendChild(row4);
        table.appendChild(tbody);
        place.appendChild(table);
    });
});
