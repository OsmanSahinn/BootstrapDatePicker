
# Bootstrap Destekli (Datepicker) Takvim Sistemi

Takvim Sistemi, tarih seçimi, fiyat gösterimi ve özel günleri takvim üzerinde vurgulama işlevleri sunan bir uygulamadır. **Bootstrap 5** ve **JavaScript** kullanılarak geliştirilmiştir ve mobil uyumlu, çoklu dil destekli bir kullanıcı arayüzü sunar.

## Özellikler ve Kullanım Örnekleri

### 1. Tarih ve Saat Seçimi

Takvimde tarih ve saat seçimi yapabilirsiniz. İsteğe bağlı olarak sadece tarih seçimi ya da saat ekleyebilirsiniz.

#### Örnek - Tek Gün ve Saat Seçimi

```html
<div id="calendarInput"></div>
<script src="takvim.js"></script>
<script>
const calendarConfig = {
    inputId: 'calendarInput',
    ShowClock: 'yes',  // Saat seçimi açık
    RangeSelect: 'no',  // Tek tarih seçimi
    LanguageSelect: 'tr-TR',  // Türkçe dil desteği
    ShowTotalAmount: 'no'
};
BootstrapDatepicker(calendarConfig);
</script>
```

### 2. Fiyat Gösterimi ve Hesaplama

Seçilen tarihler için fiyatları gösterebilir ve toplam tutarı hesaplayabilirsiniz. Müsaitlik durumuna göre günler devre dışı bırakılabilir.

#### Örnek - Fiyat Gösterimi ve Müsaitlik Kontrolü

```html
<div id="calendarInput"></div>
<script src="takvim.js"></script>
<script>
const calendarConfig = {
    inputId: 'calendarInput',
    ShowPrice: 'yes',  // Fiyat gösterimi açık
    Prices: [
        { date: '2024-10-08', price: 100, availability: 2 },
        { date: '2024-10-09', price: 150, availability: 1 },
        { date: '2024-10-10', availability: 0 }  // Müsait olmayan gün
    ],
    ShowTotalAmount: 'yes',  // Toplam tutarı göster
    currency: 'USD'
};
BootstrapDatepicker(calendarConfig);
</script>
```

### 3. Özel Günlerin Gösterimi

Takvim üzerinde özel günleri vurgulayabilirsiniz.

#### Örnek - Özel Günler

```html
<div id="calendarInput"></div>
<script src="takvim.js"></script>
<script>
const calendarConfig = {
    inputId: 'calendarInput',
    specialDays: [
        { date: '2024-10-29', name: 'Cumhuriyet Bayramı' },
        { date: '2024-12-25', name: 'Christmas Day' }
    ]
};
BootstrapDatepicker(calendarConfig);
</script>
```

### 4. Modal ve Inline Görüntüleme

Takvim modal (popup) olarak ya da sayfa üzerinde inline olarak gösterilebilir.

#### Örnek - Modal Takvim

```html
<div class="container mt-5">
    <input type="text" id="calendarInput" class="form-control" placeholder="Tarih seçmek için tıklayın">
</div>

<script src="takvim.js"></script>
<script>
const calendarConfig = {
    inputId: 'calendarInput',
    Display: 'modal',  // Modal modda takvim
    RangeSelect: 'yes'  // Tarih aralığı seçimi
};
BootstrapDatepicker(calendarConfig);
</script>
```

#### Örnek - Inline Takvim

```html
<div id="inlineCalendar"></div>

<script src="takvim.js"></script>
<script>
const calendarConfig = {
    inputId: 'inlineCalendar',
    Display: 'inline',  // Inline modda takvim
    RangeSelect: 'no'  // Tek tarih seçimi
};
BootstrapDatepicker(calendarConfig);
</script>
```

### 5. Çoklu Dil Desteği

Takvimde birden fazla dil desteği vardır. Kullanıcı arayüzü dilini seçerek takvimi farklı dillerde kullanabilirsiniz.

#### Örnek - İngilizce Dil Seçimi

```html
<div id="calendarInput"></div>
<script src="takvim.js"></script>
<script>
const calendarConfig = {
    inputId: 'calendarInput',
    LanguageSelect: 'en-US',  // İngilizce dil desteği
    ShowPrice: 'yes',
    Prices: [
        { date: '2024-10-08', price: 100, availability: 2 }
    ]
};
BootstrapDatepicker(calendarConfig);
</script>
```

---

## Kurulum

Bootstrap 5 gerekir.

## Katkıda Bulunma

Projeye katkıda bulunmak için, `pull request` gönderebilirsiniz.

---

## Destek

benosmansahin@gmail.com

https://turizm.online/datepicker

