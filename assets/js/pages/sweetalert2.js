"use strict";

// Class definition
var KTSweetAlert2Demo = function () {
	var _init = function () {
		// Sweetalert Demo 1
		$('#kt_sweetalert_demo_1').click(function (e) {
			Swal.fire('Good job!');
		});

		// Sweetalert Demo 2
		$('#kt_sweetalert_demo_2').click(function (e) {
			Swal.fire("Here's the title!", "...and here's the text!");
		});

		// Sweetalert Demo 3
		$('#kt_sweetalert_demo_3_1').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "warning");
		});

		$('#kt_sweetalert_demo_3_2').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "error");
		});

		$('#kt_sweetalert_primary').click(function (e) {
			Swal.fire("저장완료", "Save Complete", "success");
		});

		$('#kt_sweetalert_demo_3_4').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "info");
		});

		$('#kt_sweetalert_demo_3_5').click(function (e) {
			Swal.fire("Good job!", "You clicked the button!", "question");
		});

		// Sweetalert key
		$("#kt_sweetalert_mobile").click(function (e) {
			Swal.fire({
				title: "모바일 전송",
				text: "Mobile Key Complete!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "확인",
				customClass: {
					confirmButton: "btn btn-primary"
				}
			});
		});

		$("#kt_sweetalert_nfc").click(function (e) {
			Swal.fire({
				title: "카드키 발급",
				text: "Card Key Complete!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "확인!",
				customClass: {
					confirmButton: "btn btn-success"
				}
			});
		});

		$("#kt_sweetalert_number").click(function (e) {
			Swal.fire({
				title: "번호키 발급!",
				text: "Number Key Complete!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "확인!",
				customClass: {
					confirmButton: "btn btn-warning"
				}
			});
		});


		// Sweetalert Demo 5
		$("#kt_sweetalert_demo_5").click(function (e) {
			Swal.fire({
				title: "Good job!",
				text: "You clicked the button!",
				icon: "success",
				buttonsStyling: false,
				confirmButtonText: "<i class='la la-headphones'></i> I am game!",
				showCancelButton: true,
				cancelButtonText: "<i class='la la-thumbs-down'></i> No, thanks",
				customClass: {
					confirmButton: "btn btn-danger",
					cancelButton: "btn btn-default"
				}
			});
		});

		$('#kt_sweetalert_demo_6').click(function (e) {
			Swal.fire({
				position: 'top-right',
				icon: 'success',
				title: 'Your work has been saved',
				showConfirmButton: false,
				timer: 1500
			});
		});

		$('#kt_sweetalert_demo_7').click(function (e) {
			Swal.fire({
				title: 'jQuery HTML example',
				showClass: {
			    	popup: 'animate__animated animate__wobble'
			  	},
			  	hideClass: {
			    	popup: 'animate__animated animate__swing'
			  	}
		  	});
		});

		$('#kt_sweetalert_delete').click(function (e) {
			Swal.fire({
				title: '삭제 하시겠습니까?',
				text: "Are You Sure Delete",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes!'
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'삭제완료!',
						'Your file has been deleted.',
						'success'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_9').click(function (e) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Yes, delete it!',
				cancelButtonText: 'No, cancel!',
				reverseButtons: true
			}).then(function (result) {
				if (result.value) {
					Swal.fire(
						'Deleted!',
						'Your file has been deleted.',
						'success'
					)
					// result.dismiss can be 'cancel', 'overlay',
					// 'close', and 'timer'
				} else if (result.dismiss === 'cancel') {
					Swal.fire(
						'Cancelled',
						'Your imaginary file is safe :)',
						'error'
					)
				}
			});
		});

		$('#kt_sweetalert_demo_10').click(function (e) {
			Swal.fire({
				title: 'Sweet!',
				text: 'Modal with a custom image.',
				imageUrl: 'https://unsplash.it/400/200',
				imageWidth: 400,
				imageHeight: 200,
				imageAlt: 'Custom image',
				animation: false
			});
		});

		$('#kt_sweetalert_demo_11').click(function (e) {
			Swal.fire({
				title: 'Auto close alert!',
				text: 'I will close in 5 seconds.',
				timer: 5000,
				onOpen: function () {
					Swal.showLoading()
				}
			}).then(function (result) {
				if (result.dismiss === 'timer') {
					console.log('I was closed by the timer')
				}
			})
		});
	};

	return {
		// Init
		init: function () {
			_init();
		},
	};
}();

// Class Initialization
jQuery(document).ready(function () {
	KTSweetAlert2Demo.init();
});
