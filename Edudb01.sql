CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    NAME VARCHAR(100) NOT NULL,
    PASSWORD VARCHAR(255) NOT NULL,
    address VARCHAR(255),
    ROLE VARCHAR(50),
    STATUS VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (email, NAME, PASSWORD, address, ROLE, STATUS, created_at, updated_at) VALUES
('john.doe@email.com', 'John Doe', 'password123', 'Jl. Merdeka No.1', 'admin', 'active', NOW(), NOW()),
('jane.smith@email.com', 'Jane Smith', 'pass456', 'Jl. Sudirman No.2', 'user', 'active', NOW(), NOW()),
('budi.santoso@email.com', 'Budi Santoso', 'budi789', 'Jl. Diponegoro No.3', 'user', 'inactive', NOW(), NOW()),
('siti.rahma@email.com', 'Siti Rahma', 'sitiRahma!', 'Jl. Gatot Subroto No.4', 'user', 'active', NOW(), NOW()),
('agus.pratama@email.com', 'Agus Pratama', 'agus321', 'Jl. Ahmad Yani No.5', 'admin', 'active', NOW(), NOW()),
('linda.wati@email.com', 'Linda Wati', 'lindaWati!', 'Jl. Imam Bonjol No.6', 'user', 'active', NOW(), NOW()),
('michael.tan@email.com', 'Michael Tan', 'michaelTan!', 'Jl. Thamrin No.7', 'user', 'inactive', NOW(), NOW()),
('nurul.hidayah@email.com', 'Nurul Hidayah', 'nurulHidayah!', 'Jl. Pemuda No.8', 'user', 'active', NOW(), NOW()),
('andi.setiawan@email.com', 'Andi Setiawan', 'andiSetiawan!', 'Jl. Asia Afrika No.9', 'user', 'active', NOW(), NOW()),
('vina.putri@email.com', 'Vina Putri', 'vinaPutri!', 'Jl. Braga No.10', 'user', 'active', NOW(), NOW());

CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER,
    CODE VARCHAR(100),
    NAME VARCHAR(255),
    slug VARCHAR(255),
    DESCRIPTION TEXT,
    STATUS VARCHAR(50),
    photo VARCHAR(255),
    CONSTRAINT fk_categories_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON UPDATE CASCADE ON DELETE SET NULL
);

INSERT INTO categories (user_id, CODE, NAME, slug, DESCRIPTION, STATUS, photo) VALUES
(1, 'CAT001', 'Elektronik', 'elektronik', 'Kategori barang-barang elektronik', 'active', 'elektronik.jpg'),
(2, 'CAT002', 'Pakaian', 'pakaian', 'Kategori berbagai jenis pakaian', 'active', 'pakaian.jpg'),
(3, 'CAT003', 'Makanan', 'makanan', 'Kategori makanan dan minuman', 'active', 'makanan.jpg'),
(4, 'CAT004', 'Buku', 'buku', 'Kategori buku dan alat tulis', 'active', 'buku.jpg'),
(5, 'CAT005', 'Olahraga', 'olahraga', 'Kategori perlengkapan olahraga', 'inactive', 'olahraga.jpg'),
(1, 'CAT006', 'Kesehatan', 'kesehatan', 'Kategori alat kesehatan', 'active', 'kesehatan.jpg'),
(2, 'CAT007', 'Rumah Tangga', 'rumah-tangga', 'Kategori kebutuhan rumah tangga', 'active', 'rumah_tangga.jpg'),
(3, 'CAT008', 'Mainan', 'mainan', 'Kategori mainan anak-anak', 'inactive', 'mainan.jpg'),
(4, 'CAT009', 'Aksesoris', 'aksesoris', 'Kategori aksesoris fashion', 'active', 'aksesoris.jpg'),
(5, 'CAT010', 'Otomotif', 'otomotif', 'Kategori perlengkapan otomotif', 'active', 'otomotif.jpg');


CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    category_id INTEGER,
    user_id INTEGER,
    CODE VARCHAR(100),
    NAME VARCHAR(255),
    slug VARCHAR(255),
    DESCRIPTION LONGTEXT,
    photo VARCHAR(255),
    qty DOUBLE,
    unit VARCHAR(50),
    price DOUBLE,
    STATUS VARCHAR(50),
    -- Foreign Key Constraints
    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id) REFERENCES categories(id)
        ON UPDATE CASCADE ON DELETE SET NULL,
    CONSTRAINT fk_products_user
        FOREIGN KEY (user_id) REFERENCES users(id)
        ON UPDATE CASCADE ON DELETE SET NULL
);

INSERT INTO products (category_id, user_id, CODE, NAME, slug, DESCRIPTION, photo, qty, unit, price, STATUS) VALUES
(1, 1, 'PRD001', 'Smartphone Samsung', 'smartphone-samsung', 'Smartphone Samsung terbaru dengan fitur canggih.', 'samsung.jpg', 50, 'unit', 3500000, 'active'),
(2, 2, 'PRD002', 'Kaos Polos', 'kaos-polos', 'Kaos polos berbagai warna dan ukuran.', 'kaos.jpg', 200, 'pcs', 50000, 'active'),
(3, 3, 'PRD003', 'Kopi Arabika', 'kopi-arabika', 'Kopi Arabika asli Indonesia, aroma khas.', 'kopi.jpg', 100, 'pak', 120000, 'active'),
(4, 4, 'PRD004', 'Buku Novel', 'buku-novel', 'Novel best seller tahun ini.', 'novel.jpg', 75, 'pcs', 80000, 'active'),
(5, 5, 'PRD005', 'Sepatu Lari', 'sepatu-lari', 'Sepatu lari ringan dan nyaman.', 'sepatu.jpg', 60, 'pasang', 400000, 'inactive'),
(1, 2, 'PRD006', 'Headphone Bluetooth', 'headphone-bluetooth', 'Headphone wireless dengan suara jernih.', 'headphone.jpg', 40, 'unit', 250000, 'active'),
(2, 3, 'PRD007', 'Jaket Jeans', 'jaket-jeans', 'Jaket jeans trendy untuk anak muda.', 'jaket.jpg', 80, 'pcs', 150000, 'active'),
(3, 4, 'PRD008', 'Teh Hijau', 'teh-hijau', 'Teh hijau alami untuk kesehatan.', 'teh.jpg', 120, 'pak', 60000, 'active'),
(4, 5, 'PRD009', 'Pensil Warna', 'pensil-warna', 'Pensil warna isi 12 untuk anak-anak.', 'pensil.jpg', 90, 'box', 30000, 'active'),
(5, 1, 'PRD010', 'Bola Sepak', 'bola-sepak', 'Bola sepak standar internasional.', 'bola.jpg', 30, 'pcs', 180000, 'active');


SELECT 
    products.id AS product_id,
    products.name AS product_name,
    products.code AS product_code,
    products.qty,
    products.unit,
    products.price,
    products.status AS product_status,
    categories.id AS category_id,
    categories.name AS category_name,
    categories.code AS category_code,
    categories.status AS category_status,
    users.id AS user_id,
    users.name AS user_name,
    users.email AS user_email,
    users.role AS user_role
FROM 
    products
LEFT JOIN categories ON products.category_id = categories.id
LEFT JOIN users ON products.user_id = users.id;


