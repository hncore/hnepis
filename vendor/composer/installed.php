<?php return array(
    'root' => array(
        'name' => 'hncore/hnepis',
        'pretty_version' => '1.0.0',
        'version' => '1.0.0.0',
        'reference' => null,
        'type' => 'wordpress-package',
        'install_path' => __DIR__ . '/../../',
        'aliases' => array(),
        'dev' => true,
    ),
    'versions' => array(
        'hncore/hnepis' => array(
            'pretty_version' => '1.0.0',
            'version' => '1.0.0.0',
            'reference' => null,
            'type' => 'wordpress-package',
            'install_path' => __DIR__ . '/../../',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
        'hncore/hnmanager' => array(
            'pretty_version' => '1.0.0',
            'version' => '1.0.0.0',
            'reference' => 'ab5d447d5bc50a1f80ccba39fd05e8a0190ac71a',
            'type' => 'wordpress-package',
            'install_path' => __DIR__ . '/../hncore/hnmanager',
            'aliases' => array(),
            'dev_requirement' => false,
        ),
    ),
);
