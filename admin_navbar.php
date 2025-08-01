<header id="header">
    <div class="container d-flex align-items-center">

      <h1 class="logo mr-auto"><a href="./index.php?page=home">Bus Yatri</a></h1>

      <nav class="nav-menu d-none d-lg-block" id='top-nav'>
        <ul>
          <li class="nav-home"><a href="./index.php?page=home">Home</a></li>
           <li class="nav-booked"><a href="./index.php?page=booked">Reservations</a></li>
          <li class="drop-down nav-bus nav-location"><a href="#">Services</a>
            <ul>
              <li><a href="./index.php?page=bus">List Bus</a></li>
              <li><a href="./index.php?page=location">List Location</a></li>
             
              
            </ul>
          </li>
          <li class="nav-schedule"><a href="./index.php?page=schedule">Manage Schedule</a></li>
          <li class="drop-down nav-user"><a href="#"><?php echo $_SESSION['login_name'] ?> </a>
             <ul>
              <!-- <li><a href="./index.php?page=user">Manage User</a></li> -->
              <!-- <li><a href="javascript:void(0)" id="manage_account">Manage Account</a></li> -->
              <li><a href="./logout.php">Logout</a></li>
				
             
            </ul>
          </li>
        </ul>
      </nav><!-- .nav-menu -->


    </div>
  </header>
  <script>
    $(document).ready(function(){
      var page = '<?php echo isset($_GET['page']) ? $_GET['page'] : '' ?>';
      if(page != ''){
        $('#top-nav li').removeClass('active')
        $('#top-nav li.nav-'+page).addClass('active')
      }
      $('#manage_account').click(function(){
      uni_modal('Manage Account','manage_account.php')
  })
    })

  </script>