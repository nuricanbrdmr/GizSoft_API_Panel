var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngMaterial', 'ngMessages', 'ngAnimate']);
function redirectToOrder() {
    window.location.href = "ProjectEditor/Order"; // Yeni sayfanın URL'sini buraya ekleyin
}
app.controller('myController', function ($scope, $sce, $timeout) {   

    // Filter Button
    $scope.isOpen = false;
    $scope.btnText = "Select Language";
    $scope.items = [
        { name: "Html & CSS", isChecked: false },
        { name: "JavaScript", isChecked: false },
        { name: "Python", isChecked: false },
        { name: "Ruby", isChecked: false }
    ];

    $scope.toggleDropdown = function () {
        $scope.isOpen = !$scope.isOpen;
    };

    $scope.toggleCheck = function (item) {
        item.isChecked = !item.isChecked;

        var checked = $scope.items.filter(function (item) {
            return item.isChecked;
        });

        if (checked.length > 0) {
            $scope.btnText = checked.length + " Selected";
        } else {
            $scope.btnText = "Select Language";
        }
    }
    //Filter BTN end

    //Modal Code
    $scope.openModal = function () {
        $('#myModal').modal('show');
    };
    $scope.closeModal = function (buton) {
        if (buton == "myModal") {
            $('#myModal').modal('hide');
        }
        $('#configureModal').modal('hide');
        $scope.selectedProject = null;
        $scope.selectedFavType = null;
    };
    $scope.openDifferentModal = function () {
        $('#myModal').modal('hide'); // İlk modalı gizle
        $('#configureModal').modal('show'); // Farklı modalı göster
        if ($scope.selectedProjectFav) {
            $scope.isNextButtonEnabled = true;
            $scope.selectedContentHeader = {
                title: $scope.selectedProjectFav.favName,
                platform: $scope.selectedProjectFav.favtype
            };
        }
    };
    $scope.backModal = function () {
        $('#configureModal').modal('hide'); // İlk modalı gizle
        $('#myModal').modal('show'); // Farklı modalı göster
    }

    $scope.selectedProjectFav = null;
    $scope.isNextButtonEnabled = false; // Başlangıçta butonu devre dışı bırakın.
    $scope.ClickFavItem = function (favItem) {
        // tıklanan öğenin işlemlerini burada yapabilirsiniz.
        $scope.selectedFavItem = favItem; // tıklanan öğeyi seçili öğe olarak işaretlemek istiyorsanız.
        $scope.isNextButtonEnabled = true; // "Next" butonunu etkinleştirin.
        $scope.selectedProjectFav = favItem;
    };

    // Table Details Tablosuna yeni row ekleme

    
    $scope.responseDataDetails = [];
    $scope.messageParametersShow = false;
    $scope.responseDetail = function (data) {
        $scope.responseDataDetails = data;
        $scope.messageParametersShow = true;
        // Responses detaylarını getiren tabloya geçiş
    };
    $scope.backResponse = function () {
        $scope.messageParametersShow = false;
    };

    // Order Data kodu


    $scope.Data = {
        "ID": 16,
        "RequestChannel": "api",
        "RequestType": "Web Service/Order",
        "RequestMethod": "POST",
        "ProcedureSchema": "",
        "ProcedureName": "",
        "isMainConnection": false,
        "isChildField": true,
        "isRetrunList": false,
        "ArrayInArray": true,
        "isBulk": false,
        "SimpleJson": "[\n  {\n    \"OrderID\": 324,\n    \"OrderDate\": \"2020-07-19T21:00:00Z\",\n    \"DeadLine\": \"2020-07-19T21:00:00Z\",\n    \"SalesChannelId\": \"TS\",\n    \"OrderNumber\": \"TS2007332\",\n    \"VatInclude\": true,\n    \"CustomerID\": 0,\n    \"LocationID\": 1,\n    \"Qty\": 2,\n    \"GrossAmount\": 142.8927,\n    \"DiscountDetailAmount\": 11.4314,\n    \"DiscountDocumentAmount\": 0,\n    \"NetAmount\": 154.3241,\n    \"VatAmount\": 12.3459,\n    \"TotalAmount\": 166.67,\n    \"ExchangeRate\": 1,\n    \"CurrencyID\": \"TRY\",\n    \"DocumentDesc\": \"Tsoft Siparişi Order No :TS2007332\",\n    \"OppID\": 0,\n    \"GiftBoxNote\": \"\",\n    \"InvoiceNote\": \"\",\n    \"CargoID\": 0,\n    \"CargoName\": \"UPS\",\n    \"CargoPaymentTypeID\": 0,\n    \"CargoTrackingNumber\": \"\",\n    \"OrderDetails\": [\n      {\n        \"OrderDetailID\": 100763,\n        \"SkuID\": 0,\n        \"OrderDetailType\": \"\",\n        \"ProductCode\": \"\",\n        \"ProductName\": \"\",\n        \"Qty\": 1,\n        \"Price\": 0,\n        \"VatRate\": 18,\n        \"CurrencyID\": \"TRY\",\n        \"DiscountPercent1\": 0,\n        \"DiscountPercent2\": 0,\n        \"DiscountPercent3\": 0,\n        \"DiscountAmount\": 0,\n        \"DiscountAmountDocument\": 0,\n        \"Amount\": 0,\n        \"ExchangeRate\": 1,\n        \"StaffCode\": 0,\n        \"CampaignID\": 0,\n        \"PromotionID\": 0,\n        \"DetailDescription\": \" ALF20156 2'Li Takım Hawaii ürününe ait hediye paketi tutarı\"\n      },\n      {\n        \"OrderDetailID\": 100764,\n        \"SkuID\": 230414,\n        \"OrderDetailType\": \"\",\n        \"ProductCode\": \"\",\n        \"ProductName\": \"\",\n        \"Qty\": 1,\n        \"Price\": 154.3241,\n        \"VatRate\": 8,\n        \"CurrencyID\": \"TRY\",\n        \"DiscountPercent1\": 0,\n        \"DiscountPercent2\": 0,\n        \"DiscountPercent3\": 0,\n        \"DiscountAmount\": 0,\n        \"DiscountAmountDocument\": 0,\n        \"Amount\": 154.3241,\n        \"ExchangeRate\": 1,\n        \"StaffCode\": 0,\n        \"CampaignID\": 0,\n        \"PromotionID\": 0,\n        \"DetailDescription\": \"ALF-0077 M Indigo ALF20156 2'Li Takım Hawaii\"\n      }\n    ],\n    \"OrderInvoiceAddress\": {\n      \"CustomerName\": \"Necmi \",\n      \"CustomerSurName\": \"Taşcı\",\n      \"CountryID\": \"TR\",\n      \"CountryName\": \"Türkiye\",\n      \"CityID\": null,\n      \"CityName\": null,\n      \"TownID\": \"\",\n      \"TownName\": \"Fatih\",\n      \"Address\": \"Alemdar Mah. Başmuhasip Sok. 14/3 Fatih/İstanbul\",\n      \"PostCode\": \"34000\",\n      \"TaxNumber\": \"\",\n      \"TaxOffice\": \"\",\n      \"Phone\": \"5392923897\",\n \n      \"MobilePhone\": \"5392923897\",\n      \"Fax\": \"\",\n      \"Email\": \"necmitascci@gmail.com\",\n      \"FirmTitle\": \"Necmi Taşcı\"\n    },\n    \"OrderShipmentAddress\": {\n      \"CustomerName\": \"Gamze \",\n      \"CustomerSurName\": \"Coşkun\",\n      \"CountryID\": \"TR\",\n      \"CountryName\": \"Türkiye\",\n      \"CityID\": null,\n      \"CityName\": null,\n      \"TownID\": \"\",\n      \"TownName\": \"Ümraniye\",\n      \"Address\": \"Şerifali Turgut Özal Bulvarı no:99 Ümraniye İstanbul Ümraniye/İstanbul\",\n      \"PostCode\": \"34000\",\n      \"TaxNumber\": \"\",\n      \"TaxOffice\": \"\",\n      \"Phone\": \"\",\n\n      \"MobilePhone\": \"\",\n      \"Fax\": \"\",\n      \"Email\": \"necmitascci@gmail.com\",\n      \"FirmTitle\": \"Gamze Coşkun\"\n    },\n    \"OrderPayments\": [\n      {\n        \"PaymentOrderId\": 1,\n        \"PaymentID\": 5,\n        \"PaymentAmount\": 166.67,\n        \"PaymentCurrencyID\": \"TRY\",\n        \"PaymentAmountLocal\": 166.67,\n        \"SerialNumber\": null,\n        \"TermsCount\": 2\n      }\n    ]\n  }\n\n]",
        "Description": "Yeni E-Ticaret Siparişi Oluşturmak İçin Kullanılır.",
        "TokenArea": "GizB2C",
        "Steps": [
            {
                "RequestTypeID": 16,
                "TypeOrder": 1,
                "ProcedureSchema": "GizB2C",
                "ProcedureName": "ImportOrder",
                "isBreakForError": true,
                "isBulk": true,
                "BulkTokens": "$[*]",
                "OnlyOnce": false,
                "Parameters": [
                    {
                        "RequestTypeID": 16,
                        "TypeIndex": 1,
                        "Position": 1,
                        "ParameterName": "OrderTypeID",
                        "DataField": "",
                        "isRequired": null,
                        "DefaultValue": "245"
                    },
                    {
                        "RequestTypeID": 16,
                        "TypeIndex": 1,
                        "Position": 2,
                        "ParameterName": "OrderSubTypeID",
                        "DataField": "",
                        "isRequired": null,
                        "DefaultValue": "3"
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "TypeOrder": 2,
                "ProcedureSchema": "GizB2C",
                "ProcedureName": "ImportOrderDetail",
                "isBreakForError": true,
                "isBulk": true,
                "BulkTokens": "$[*].OrderDetails[*]",
                "OnlyOnce": false,
                "Parameters": [
                    {
                        "RequestTypeID": 16,
                        "TypeIndex": 2,
                        "Position": 1,
                        "ParameterName": "OrderNumber",
                        "DataField": ">>>OrderNumber",
                        "isRequired": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "TypeOrder": 3,
                "ProcedureSchema": "GizB2C",
                "ProcedureName": "ImportOrderInvoiceAddress",
                "isBreakForError": true,
                "isBulk": true,
                "BulkTokens": "$[*].OrderInvoiceAddress",
                "OnlyOnce": false,
                "Parameters": [
                    {
                        "RequestTypeID": 16,
                        "TypeIndex": 3,
                        "Position": 1,
                        "ParameterName": "OrderNumber",
                        "DataField": ">>OrderNumber",
                        "isRequired": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "TypeOrder": 4,
                "ProcedureSchema": "GizB2C",
                "ProcedureName": "ImportOrderShipmentAddress",
                "isBreakForError": true,
                "isBulk": true,
                "BulkTokens": "$[*].OrderShipmentAddress",
                "OnlyOnce": false,
                "Parameters": [
                    {
                        "RequestTypeID": 16,
                        "TypeIndex": 4,
                        "Position": 1,
                        "ParameterName": "OrderNumber",
                        "DataField": ">>OrderNumber",
                        "isRequired": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "TypeOrder": 5,
                "ProcedureSchema": "GizB2C",
                "ProcedureName": "ImportOrderPayment",
                "isBreakForError": true,
                "isBulk": true,
                "BulkTokens": "$[*].OrderPayments[*]",
                "OnlyOnce": false,
                "Parameters": [
                    {
                        "RequestTypeID": 16,
                        "TypeIndex": 5,
                        "Position": 1,
                        "ParameterName": "OrderNumber",
                        "DataField": ">>>OrderNumber",
                        "isRequired": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "TypeOrder": 6,
                "ProcedureSchema": "GizB2C",
                "ProcedureName": "SP_GizB2C_Transfer_Order",
                "isBreakForError": true,
                "isBulk": false,
                "BulkTokens": "",
                "OnlyOnce": true,
                "Parameters": []
            }
        ],
        "Parameters": [
            {
                "RequestTypeID": 16,
                "jsonPath": "",
                "Fields": [
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "CargoID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Kargo ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "CargoName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Kargo Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "CargoPaymentTypeID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Kargo Ödeme 0: Şirket 1:Müşteri",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "CargoTrackingNumber",
                        "DataType": "string",
                        "MaxValue": 50,
                        "Required": false,
                        "Description": "Kargo Takip Numarası",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "CurrencyID",
                        "DataType": "string",
                        "MaxValue": 3,
                        "Required": false,
                        "Description": "Para Birimi ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "CustomerID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Müşteri ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "DeadLine",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Son Teslim Tarihi  ISO 8601 FORMATI",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "DiscountDetailAmount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ürün İndirim Tutarı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "DiscountDocumentAmount",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Belge Dibi İndirim Dağıtım Tutarı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "DocumentDesc",
                        "DataType": "string",
                        "MaxValue": 250,
                        "Required": false,
                        "Description": "Açıklama",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "ExchangeRate",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Kur",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "GiftBoxNote",
                        "DataType": "string",
                        "MaxValue": 250,
                        "Required": false,
                        "Description": "Hediye Paketi Notu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "GrossAmount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Brüt Tutar (İndirimsiz Kdv Hariç Tutar)",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "InvoiceNote",
                        "DataType": "string",
                        "MaxValue": 1000,
                        "Required": false,
                        "Description": "Fatura Notu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "LocationID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Lokasyon ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "NetAmount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Net Tutar (İndirimli Kdv Hariç Net Tutar)",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OppID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "\"0 geçilir\"",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderDate",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Sipariş Tarihi ISO 8601 FORMATI",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderDetails",
                        "DataType": "array",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Sipariş ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderInvoiceAddress",
                        "DataType": "object",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderNumber",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Sipariş Numarası",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderPayments",
                        "DataType": "array",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "OrderShipmentAddress",
                        "DataType": "object",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "Qty",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Adet",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "SalesChannelId",
                        "DataType": "string",
                        "MaxValue": 5,
                        "Required": false,
                        "Description": "Satış Kanal ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "TotalAmount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Toplam Tutar",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "VatAmount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "KDV Tutarı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "",
                        "ParameterName": "VatInclude",
                        "DataType": "boolean",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "KDV Dahil",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "jsonPath": "OrderDetails",
                "Fields": [
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "Amount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Birim Fiyat x Adet",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "CampaignID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Kampanya ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "CurrencyID",
                        "DataType": "string",
                        "MaxValue": 3,
                        "Required": false,
                        "Description": "Para Birimi ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "DetailDescription",
                        "DataType": "string",
                        "MaxValue": 250,
                        "Required": false,
                        "Description": "Açıklama",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "DiscountAmount",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "İndirim Tutarı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "DiscountAmountDocument",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Belge Dibi İndirim Tutarı Dağılımı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "DiscountPercent1",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "İndirim Yüzdesi 1",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "DiscountPercent2",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "İndirim Yüzdesi 2",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "DiscountPercent3",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "İndirim Yüzdesi 3",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "ExchangeRate",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Kur",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "OrderDetailID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ürün Sıra ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "OrderDetailType",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "(Boş Bırakılacak)",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "Price",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Birim Fiyat",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "ProductCode",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Ürün Kodu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "ProductName",
                        "DataType": "string",
                        "MaxValue": 50,
                        "Required": false,
                        "Description": "Ürün Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "PromotionID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Promosyon ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "Qty",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Adet",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "SkuID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Sku ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "StaffCode",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Satış Personeli Kodu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderDetails",
                        "ParameterName": "VatRate",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "KDV Oranı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "jsonPath": "OrderInvoiceAddress",
                "Fields": [
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "Address",
                        "DataType": "string",
                        "MaxValue": 500,
                        "Required": false,
                        "Description": "Adres",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "CityID",
                        "DataType": "string",
                        "MaxValue": 5,
                        "Required": false,
                        "Description": "Şehir ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "CityName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Şehir Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "CountryID",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ülke ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "CountryName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Ülke Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "CustomerName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Müşteri Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "CustomerSurName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Müşteri Soyadı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "Email",
                        "DataType": "string",
                        "MaxValue": 50,
                        "Required": false,
                        "Description": "Email",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "Fax",
                        "DataType": "string",
                        "MaxValue": 10,
                        "Required": false,
                        "Description": "Fax",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "FirmTitle",
                        "DataType": "string",
                        "MaxValue": 250,
                        "Required": false,
                        "Description": "Şirket Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "MobilePhone",
                        "DataType": "string",
                        "MaxValue": 10,
                        "Required": false,
                        "Description": "Cep Telefonu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "Phone",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "PostCode",
                        "DataType": "string",
                        "MaxValue": 10,
                        "Required": false,
                        "Description": "Posta Kodu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "TaxNumber",
                        "DataType": "string",
                        "MaxValue": 11,
                        "Required": false,
                        "Description": "Vergi Numarası",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "TaxOffice",
                        "DataType": "string",
                        "MaxValue": 50,
                        "Required": false,
                        "Description": "Vergi Dairesi",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "TownID",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "İlçe ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderInvoiceAddress",
                        "ParameterName": "TownName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "İlçe Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "jsonPath": "OrderPayments",
                "Fields": [
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "PaymentAmount",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ödeme Tutarı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "PaymentAmountLocal",
                        "DataType": "real",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Yerel Ödeme Tutarı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "PaymentCurrencyID",
                        "DataType": "string",
                        "MaxValue": 3,
                        "Required": false,
                        "Description": "Ödeme Para Birimi ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "PaymentID",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ödeme ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "PaymentOrderId",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ödeme Sıra ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "SerialNumber",
                        "DataType": "null",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Seri Numarası",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderPayments",
                        "ParameterName": "TermsCount",
                        "DataType": "int",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Taksit Sayısı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    }
                ]
            },
            {
                "RequestTypeID": 16,
                "jsonPath": "OrderShipmentAddress",
                "Fields": [
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "Address",
                        "DataType": "string",
                        "MaxValue": 500,
                        "Required": false,
                        "Description": "Adres",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "CityID",
                        "DataType": "string",
                        "MaxValue": 5,
                        "Required": false,
                        "Description": "Şehir ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "CityName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Şehir Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "CountryID",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "Ülke ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "CountryName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Ülke Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "CustomerName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Müşteri Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "CustomerSurName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "Müşteri Soyadı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "Email",
                        "DataType": "string",
                        "MaxValue": 50,
                        "Required": false,
                        "Description": "Email",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "Fax",
                        "DataType": "string",
                        "MaxValue": 10,
                        "Required": false,
                        "Description": "Fax",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "FirmTitle",
                        "DataType": "string",
                        "MaxValue": 250,
                        "Required": false,
                        "Description": "Şirket Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "MobilePhone",
                        "DataType": "string",
                        "MaxValue": 10,
                        "Required": false,
                        "Description": "Cep Telefonu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "Phone",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "PostCode",
                        "DataType": "string",
                        "MaxValue": 10,
                        "Required": false,
                        "Description": "Posta Kodu",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "TaxNumber",
                        "DataType": "string",
                        "MaxValue": 11,
                        "Required": false,
                        "Description": "Vergi Numarası",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "TaxOffice",
                        "DataType": "string",
                        "MaxValue": 50,
                        "Required": false,
                        "Description": "Vergi Dairesi",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "TownID",
                        "DataType": "string",
                        "MaxValue": 0,
                        "Required": false,
                        "Description": "İlçe ID",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    },
                    {
                        "RequestTypeID": 16,
                        "jsonPath": "OrderShipmentAddress",
                        "ParameterName": "TownName",
                        "DataType": "string",
                        "MaxValue": 20,
                        "Required": false,
                        "Description": "İlçe Adı",
                        "EmbeddedParameter": null,
                        "DefaultValue": null
                    }
                ]
            }
        ],
        "ResultsonPath": null,
        "ResultsonKey": null
    };

    $scope.Data.RequestParameters = [
        {
            "ResponseTypeID": 2,
            "RequestTypeID": 1,
            "ResponseStatus": "Error",
            "ResponseDescription": "error",
            "ResponseJson": "{\n  \"RequestID\": \"xxxxxx\",\n  \"Message\": \"HATAİÇERİĞİ\"\n}",
            "SortIndex": 0,
            "Parameters": [
                {
                    "ResponseTypeID": 2,
                    "jsonPath": "",
                    "ParameterName": "RequestID",
                    "DataType": "string",
                    "MaxValue": 0,
                    "Required": false,
                    "Description": ""
                },
                {
                    "ResponseTypeID": 2,
                    "jsonPath": "",
                    "ParameterName": "Message",
                    "DataType": "string",
                    "MaxValue": 0,
                    "Required": false,
                    "Description": ""
                }
            ]
        },
        {
            "ResponseTypeID": 1,
            "RequestTypeID": 1,
            "ResponseStatus": "Success",
            "ResponseDescription": "success",
            "ResponseJson": "[\n  {\n    \"OrderNumber\": \"1231231231231\",\n    \"ImportStatus\": 0,\n    \"ImportStatusMessage\": \"Bu Siparişte Ödeme Bulunmadığı İçin Aktarılamamıştır.\"\n  },\n  {\n    \"OrderNumber\": \"12354353567\",\n    \"ImportStatus\": 1,\n    \"ImportStatusMessage\": \"Sipariş Başarlı Bir Şekilde Aktarılmıştır.\"\n  }\n]",
            "SortIndex": 1,
            "Parameters": [
                {
                    "ResponseTypeID": 1,
                    "jsonPath": "",
                    "ParameterName": "OrderNumber",
                    "DataType": "string",
                    "MaxValue": 0,
                    "Required": false,
                    "Description": ""
                },
                {
                    "ResponseTypeID": 1,
                    "jsonPath": "",
                    "ParameterName": "ImportStatus",
                    "DataType": "int",
                    "MaxValue": 0,
                    "Required": false,
                    "Description": ""
                },
                {
                    "ResponseTypeID": 1,
                    "jsonPath": "",
                    "ParameterName": "ImportStatusMessage",
                    "DataType": "string",
                    "MaxValue": 0,
                    "Required": false,
                    "Description": ""
                }
            ]
        }
    ];

    //const container = document.getElementById("jsoneditor")

    //const options = {
    //    mode: 'code',
    //    modes: ['code', 'tree'],
    //}
    //console.log('options', options);
    //const editorJSON = new JSONEditor(container, options)
    //editorJSON.set($scope.Data.SimpleJson)


    // Order Data end


    $scope.projectType = [
        {
            icon: $sce.trustAsHtml("<i class='bx bxl-typescript'></i>"),
            name: "Type Script",
            description: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
            platforms: ["C#", "Js", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>" , favName: "Console App", favtype: "C"}
            ]
        },
        {
            icon: "<i class='bx bx-code-block'></i>",
            name: "Console App",
            description: "A project for creating a command-line application that can run on .NET on Windows, Linux and macOS.",
            platforms: ["C#", "ASP.NET", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" },
                { favIcon: "<i class='bx bxl-typescript'></i>", favName: "Type Script App", favtype: "Ty" }

            ]
        },
        {
            icon: "<i class='bx bxl-typescript'></i>",
            name: "Type Script",
            description: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
            platforms: ["C#", "Js", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" }
            ]
        },
        {
            icon: "<i class='bx bx-code-block'></i>",
            name: "Console App",
            description: "A project for creating a command-line application that can run on .NET on Windows, Linux and macOS.",
            platforms: ["C#", "ASP.NET", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" }
            ]
        },
        {
            icon: "<i class='bx bxl-typescript'></i>",
            name: "Type Script",
            description: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.",
            platforms: ["C#", "Js", "Web"],
            favTypeList: [
                { favIcon: "<i class='bx bx-code-block'></i>", favName: "Console App", favtype: "C" },
                { favIcon: "<i class='bx bxl-typescript'></i>", favName: "Type Script App", favtype: "C" }
            ]
        }
    ];

    $scope.selectedProject = null;
    $scope.selectedFavType = [];
    $scope.trustHtml = function (html) {
        return $sce.trustAsHtml(html);
    };
    $scope.showFavType = function (item) {
        if ($scope.selectedProject != null) {
            $scope.selectedProject = item;
            $scope.selectedProjectFav = null;
            $scope.isNextButtonEnabled = false; // "Next" butonunu etkinleştirin.
        } else {
            $scope.selectedProject = item;

        }
        $scope.selectedFavType = item.favTypeList;
    };
    // Modal End Code

    $scope.contentsItems = [
        { name: 'Web Service', content: 'Order', isActive: false, contents: [], orderItems: [] },
        { name: 'Windows Service', content: 'Service', isActive: false, contents: [], orderItems: [] },
    ];

    // Toggle functions
    $scope.toggleItem = function (item) {
        item.isActive = !item.isActive;
    };
    $scope.toggleItems = function (orderItems) {
        // isActive değerini false yaparak alt içeriği gizleyin
        angular.forEach(orderItems, function (subContent) {
            subContent.isActive = !subContent.isActive;
        });
    };
    // Toggle functions end


    $scope.addNewItemContent = function (item) {
        var newItemContent = {
            name: 'New Item',
            content: 'New Item Content',
            isActive: true,
            contents: [],
        };
        item.contents.push(newItemContent);
    };

    // Yeni fonksiyon: İç içe içerikleri eklemek için
    $scope.toggleSubItemMenu = function (event, content) {
        if (content.content == "order") {
            content.showSubItemMenu = !content.showSubItemMenu;
        } else {
            content.showSubItemMenu = !content.showSubItemMenu;
        }

    };
    $scope.addOrder = function (item, type) {
        var newItem = {
            name: type,
            content: 'New Sub Item Content',
            type: type,
            isActive: true,
            contents: [],
        }
        item.orderItems.push(newItem);
        item.showSubItemMenu = false;
    }

    $scope.addSubItemContent = function (parentContent, type) {   
        var newSubItemContent = {
            name: type,
            content: 'New Sub Item Content',
            type: type,
            isActive: true,
        };
        parentContent.contents.push(newSubItemContent);
        parentContent.showSubItemMenu = false;

    };

});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
});
app.service('ngDockInContainer', [function () {
    var scope = this;
    scope.inputEvent = function (event) {
        if (angular.isDefined(event.touches)) {
            return event.touches[0];
        }
        else if (angular.isDefined(event.originalEvent) && angular.isDefined(event.originalEvent.touches)) {
            return event.originalEvent.touches[0];
        }
        return event;
    };
    scope.touchTimeout = 100;
}])
app.directive('ngDockPanel', function () {
    return {
        restrict: 'EA',
        scope: {
            title: '@',
            id: '@'
        },
        templateUrl: homeUrl + 'Modal/DockInContainer',
        transclude: true,
        replace: true,
        link: function (scope, element, attrs) {
           
        }
    };
});


//app.controller("rootController", function ($rootScope, $scope, $http, $sce, $window) {


//}