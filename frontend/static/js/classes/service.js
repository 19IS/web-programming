class Service {
    id = 0;
    header = "";
    description = "";
    color = '#ffffff';
    container = null;

    constructor(id = 0, header = "empty", description = "no description", color = "#e1e1e1") {
        this.id = id;
        this.header = header;
        this.description = description;
        this.color = color;
    }

    draw(container) {
        const div = document.createElement('div');
        div.classList.add('service-item');
        div.innerHTML = '<div class="service-cover' + " " + this.color + '"></div>' +
            '<h2>' + this.header + '</h2>' +
            '<p>' + this.description + '</p>';

        if (container == null) {
            container = this.container;
        }
        container.appendChild(div);
    }
}