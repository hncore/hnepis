<?php
namespace HNMG\EP_Load;

class EP_Cache {
	public $timeCache;
    public $folderCache;
	
    public function __construct() {
        $this->folderCache = WP_CONTENT_DIR . '/film-cache';
        $this->timeCache = 3600;
        if (!function_exists('WP_Filesystem')) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
        }

        global $wp_filesystem;
        WP_Filesystem();
        $this->wp_filesystem = $wp_filesystem;
    }

    public function readCache($name){
        $name = md5(md5($name));
        $result = '';
        $createFolderCache = $this->createFolderCache($name);
        $file = $this->folderCache.'/'.$createFolderCache.'/'.$name.'.txt';
        if(file_exists($file)){
            if($this->timeCache != ''){
                if($this->timeCache > (time() - filemtime($file))){
                    $result = file_get_contents($file);
                }
            } else {
                $result = file_get_contents($file);
            }
        }
        return $result;
    }

    public function getCache(){
        $result = array();
        $getDirContents = $this->getDirContents($this->folderCache);
        $i = 0;
        if($getDirContents){
            foreach ($getDirContents as $key => $value) {
                if(strpos($value, '.txt')){
                    $result[] = array(
                        'file'    => $value
                    );
                }
            }
            return json_encode($result);
        }
    }

    public function saveCache($name, $data){
        $name = md5(md5($name));
        $createFolderCache = $this->createFolderCache($name);
        if (!is_dir($this->folderCache)) {
            mkdir($this->folderCache, 0777, true);
        }
        if(!chmod($this->folderCache, 0777)) {
            chmod($this->folderCache, 0777);
        }
        $dir = $this->folderCache.'/'.$createFolderCache;
        $file = $dir.'/'.$name.'.txt';
        if (!is_dir($dir)) {
            mkdir($dir, 0777, true);
        }

        $this->wp_filesystem->put_contents($file, $data, FS_CHMOD_FILE);
        $index_file = WP_CONTENT_DIR . '/film-cache/index.php';
        $this->wp_filesystem->put_contents($index_file, '<?php // Silence is golden.', FS_CHMOD_FILE);
    }

    public function delCache($name){
        $result = '';
        $name = md5(md5($name));
        $createFolderCache = $this->createFolderCache($name);
        $file = $this->folderCache.'/'.$createFolderCache.'/'.$name.'.txt';
        if(file_exists($file)){
            if(unlink($file)) {
                $result = array(
                    'status' => 1,
                    'result' => 'Deleted'
                );
            } else {
                $result = array(
                    'status' => 0,
                    'result' => 'Delete error'
                );
            }
        }else{
            $result = array(
                    'status' => 0,
                    'result' => 'Link not exists'
                );
        }
        return $result;
    }

    public function delAllCache($timeCache){
        $result = array();
        $getDirContents = $this->getDirContents($this->folderCache);
        $i = $j = 0;
        if($getDirContents){
            foreach ($getDirContents as $key => $value) {
                if(strpos($value, '.txt')){
                    $i++;
                    if($timeCache <= (time() - filemtime($value))){
                        $j++;
                        if(unlink($value))
                            $result['status'] = 1;
                        else
                            $result['status'] = 0;
                    }
                }
            }
        }
        $this->removeEmptySubFolders($this->folderCache);
        $result['total_cache'] = $i;
        $result['time_limit'] = $timeCache;
        $result['cache_deleted'] = $j;
        $result['cache_count'] = $i-$j;
        return json_encode($result);
    }

    public function cacheCount(){
        $result = array();
        $getDirContents = $this->getDirContents($this->folderCache);
        $i = 1;
        if($getDirContents){
            foreach ($getDirContents as $key => $value) {
                if(strpos($value, '.txt')){
                    $result['result'] = 1;
                    $result['total_cache'] = $i;
                    $i++;
                }
            }
        }

        return json_encode($result);
    }

    private function createFolderCache($name){
        $folder1 = substr($name, 0, 2);
        $folder2 = substr($name, 2, 2);
        return $folder1.'/'.$folder2;
    }

    private function getDirContents($dir, &$results = array()){
        $files = scandir($dir);

        foreach($files as $key => $value){
            $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
            if(!is_dir($path)) {
                $results[] = $path;
            } else if($value != "." && $value != "..") {
                $this->getDirContents($path, $results);
                $results[] = $path;
            }
        }
        return $results;
    }

    private function removeEmptySubFolders($path){
        $empty=true;
        foreach (glob($path.DIRECTORY_SEPARATOR."*") as $file)
        {
            $empty &= is_dir($file) && $this->removeEmptySubFolders($file);
        }
        return $empty && @rmdir($path);
    }
	
}

?>