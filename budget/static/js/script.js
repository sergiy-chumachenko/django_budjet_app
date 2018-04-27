(function () {
    document.querySelector('#categoryInput').addEventListener('keydown', function (e) {
        if (e.keyCode != 13){
            return;
        }

        var categoryName = this.value;
        this.value = '';
        addNewCategory(categoryName);
        updateCategoriesString()
    });
    function addNewCategory(name) {
        document.querySelector('#categoriesContainer').insertAdjacentHTML('beforeend',
            `
            <li class="category">
                <span class="name">Development</span>
                <span class="btnRemove bold" onclick="removeCategory(this)">X</span>
            </li>`
        )
    }
})();