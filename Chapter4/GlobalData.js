const GlobalData = (
    () => {
        let headerContainerDef = {
            sectionHTML: '<div>...</div>'
        }
        let footerContainerDef= {
            sectionHTML: '<div>...</div>'
        }

        return {
            getHeaderHTMLTxt: function() {
                return headerContainerDef.sectionHTML;
            },

            getFooterHTMLtxt: function() {
                return footerContainerDef.sectionHTML;
            }
        }
    }
)();