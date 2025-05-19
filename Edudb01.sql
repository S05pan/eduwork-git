CREATE TABLE users (
    user_id INT PRIMARY KEY,
    NAME VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    gender VARCHAR(10),
    address VARCHAR(255)
);

INSERT INTO users (user_id, NAME, email, phone, gender, address) VALUES
(1, 'Andi', 'andi@mail.com', '081234567001', 'Male', 'Jl. Melati No.1'),
(2, 'Budi', 'budi@mail.com', '081234567002', 'Male', 'Jl. Mawar No.2'),
(3, 'Citra', 'citra@mail.com', '081234567003', 'Female', 'Jl. Kenanga No.3'),
(4, 'Dewi', 'dewi@mail.com', '081234567004', 'Female', 'Jl. Anggrek No.4'),
(5, 'Eka', 'eka@mail.com', '081234567005', 'Male', 'Jl. Kamboja No.5'),
(6, 'Fajar', 'fajar@mail.com', '081234567006', 'Male', 'Jl. Flamboyan No.6'),
(7, 'Gina', 'gina@mail.com', '081234567007', 'Female', 'Jl. Teratai No.7'),
(8, 'Hari', 'hari@mail.com', '081234567008', 'Male', 'Jl. Dahlia No.8'),
(9, 'Intan', 'intan@mail.com', '081234567009', 'Female', 'Jl. Seroja No.9'),
(10, 'Joko', 'joko@mail.com', '081234567010', 'Male', 'Jl. Anyelir No.10'),
(11, 'Kiki', 'kiki@mail.com', '081234567011', 'Female', 'Jl. Mawar No.11'),
(12, 'Lina', 'lina@mail.com', '081234567012', 'Female', 'Jl. Anggrek No.12'),
(13, 'Mahdi', 'mahdi@mail.com', '081234567013', 'Male', 'Jl. Kamboja No.13'),
(14, 'Nina', 'nina@mail.com', '081234567014', 'Female', 'Jl. Melati No.14'),
(15, 'Omar', 'omar@mail.com', '081234567015', 'Male', 'Jl. Teratai No.15'),
(16, 'Putri', 'putri@mail.com', '081234567016', 'Female', 'Jl. Kenanga No.16'),
(17, 'Qori', 'qori@mail.com', '081234567017', 'Female', 'Jl. Flamboyan No.17'),
(18, 'Rian', 'rian@mail.com', '081234567018', 'Male', 'Jl. Dahlia No.18'),
(19, 'Sinta', 'sinta@mail.com', '081234567019', 'Female', 'Jl. Seroja No.19'),
(20, 'Tono', 'tono@mail.com', '081234567020', 'Male', 'Jl. Anyelir No.20'),
(21, 'Uli', 'uli@mail.com', '081234567021', 'Female', 'Jl. Mawar No.21'),
(22, 'Vino', 'vino@mail.com', '081234567022', 'Male', 'Jl. Anggrek No.22'),
(23, 'Winda', 'winda@mail.com', '081234567023', 'Female', 'Jl. Kamboja No.23'),
(24, 'Xena', 'xena@mail.com', '081234567024', 'Female', 'Jl. Melati No.24'),
(25, 'Yuda', 'yuda@mail.com', '081234567025', 'Male', 'Jl. Teratai No.25'),
(26, 'Zara', 'zara@mail.com', '081234567026', 'Female', 'Jl. Kenanga No.26'),
(27, 'Arif', 'arif@mail.com', '081234567027', 'Male', 'Jl. Flamboyan No.27'),
(28, 'Bella', 'bella@mail.com', '081234567028', 'Female', 'Jl. Dahlia No.28'),
(29, 'Cahyo', 'cahyo@mail.com', '081234567029', 'Male', 'Jl. Seroja No.29'),
(30, 'Dina', 'dina@mail.com', '081234567030', 'Female', 'Jl. Anyelir No.30');

SELECT 
    NAME AS Nama_Lengkap,
    phone AS Nomor_Telepon,
    address AS Alamat
FROM users;

