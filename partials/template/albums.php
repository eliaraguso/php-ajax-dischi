<div class="container">
    <?php foreach ($database as $album) { ?>
        <div class="album-card">
            <img src="<?= $album['poster'] ?>" alt="<?= $album['title'] . ' ' . $album['author'] ?>">
            <h2><?= $album['title'] ?></h2>
            <p><?= $album['author'] ?></p>
            <p><?= $album['year'] ?></p>
        </div>
    <?php } ?>
</div>