<?php

use CCI\Ui\Ui;

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");

// Название компонента, не редактировать
$componentName = '/uiTest/vue/';

// Регистрация компонента
Ui::active();
Ui::registration($componentName);

?>
    <section class="mdl-grid mdl-width-area">
        <div class="mdl-cell--12-col-desktop mdl-cell--8-col-tablet mdl-cell--4-col-phone">
            <?php
            // Подключение как компонента.
            // Внимание: при подключении как компонент не будут работать vue-router и vuex.
            // Ui::comp($componentName);

            // Подключение в виде создания нового экземпляра Vue.
            Ui::create($componentName);
            ?>
        </div>
    </section>
<?php

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php");
