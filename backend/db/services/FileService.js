import { v4 } from 'uuid';
import { resolve } from 'path';

class FileService {
    saveFile(file) {
        const fileName = v4() + '.jpg';
        const filePath = resolve('blogImages', fileName);
        file.mv(filePath);
        return fileName;
    }
};

export default new FileService();
